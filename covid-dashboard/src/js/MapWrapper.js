/* eslint-disable no-undef */
/* eslint-disable no-console */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import create from './utils/create';
import getCountryColor from './utils/getCountryColor';
import getNumbersPer100 from './utils/getNumbersPer100';
import makeTodaykey from './utils/makeTodayKey';
import capitalize from './utils/capitalize';
import round from './utils/roundNumber';
import CovidApi from './CovidApi';
import Switcher from './Switcher';
import FullScreenBtn from './FullScreenBtn';
import * as constants from './utils/constants';

import { features } from './data/countries.json';

export default class MapWrapper {
  constructor(layout) {
    this.layout = layout;
    this.data = [];
    this.mapOptions = {
      center: [30, 30],
      zoom: 1.5,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topleft',
      },
    };
    this.coefficient = 1000;
    this.container = create('div', 'map__wrapper');
    this.headerContainer = create('div', 'component-header');
    this.mapContainer = create('div');
  }

  init() {
    CovidApi.getEachCountryData().then((data) => {
      this.data = data;
    }).then(() => this.transformToGeoJson(this.data))
      .then(() => this.generateLayout());
  }

  transformToGeoJson(data) {
    const featureArr = [...features];
    const polygons = featureArr.map((el) => {
      const { geometry, id } = el;
      // const { id } = properties;
      return { id, geometry };
    });
    let database = [...data];
    database = database.map((country) => {
      const id = country.countryInfo.iso3;
      const geo = polygons.find((element) => element.id === id);
      if (!geo) {
        return null;
      }

      const { geometry } = geo;
      country.geometry = geometry;
      return country;
    });
    database = database.filter((el) => el !== null);
    this.GeoJson = {
      type: 'FeatureCollection',
      features: database.map((country = {}) => {
        const { geometry } = country;
        return {
          type: 'Feature',
          properties: {
            ...country,
          },
          geometry: {
            ...geometry,
          },
        };
      }),
    };
  }

  generateLayout() {
    this.switcher = new Switcher(this, 'map');
    this.fullScreenBtn = new FullScreenBtn(this);

    this.mapContainer.setAttribute('id', 'map');

    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.mapContainer);
    this.layout.container.appendChild(this.container);

    this.generateMap();
    this.generateLegend();

    this.initClicks();
  }

  generateMap() {
    this.map = L.map('map', this.mapOptions);

    this.layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 16,
    }).addTo(this.map);

    this.layergeo = L.geoJSON(this.GeoJson, {
      style: this.giveCountriesStyle,
      onEachFeature: this.onEachFeature,
    })
      .addTo(this.map);

    this.popup = L.popup();
  }

  initClicks() {
    this.switcher.initializeClicks();
    this.fullScreenBtn.initializeClicks();
  }

  generateLegend() {
    const legend = L.control({ position: 'bottomright' });
    // eslint-disable-next-line no-unused-vars
    legend.onAdd = (map) => {
      this.legend = L.DomUtil.create('div', 'info legend');
      this.renderLegendContent();
      return this.legend;
    };
    legend.addTo(this.map);
  }

  renderLegendContent() {
    console.log(this.coefficient);
    this.grades = [0, (this.coefficient * 1), (this.coefficient * 10), (this.coefficient * 100),
      (this.coefficient * 500), (this.coefficient * 1000), (this.coefficient * 2000),
      (this.coefficient * 5000)];
    for (let i = 0; i < this.grades.length; i += 1) {
      if (i + 1 === this.grades.length) {
        this.legend.innerHTML += `<span><i style="background:${getCountryColor(this.grades[i] + 1, this.coefficient)}"></i> ${this.grades[i]} + </span>`;
      } else {
        this.legend.innerHTML
      += `<span><i style="background:${getCountryColor(this.grades[i] + 1, this.coefficient)}"></i> ${this.grades[i]} &ndash; ${this.grades[i + 1]} </span>`;
      }
    }
  }

  update() {
    this.updateCoeficient();

    const legendChildren = [...this.legend.children];
    legendChildren.forEach((el) => this.legend.removeChild(el));
    this.renderLegendContent();
    this.updateMapColor();
  }

  updateMapColor() {
    this.layergeo = L.geoJSON(this.GeoJson, {
      style: this.giveCountriesStyle,
      onEachFeature: this.onEachFeature,
    })
      .addTo(this.map);
  }

  updateCoeficient() {
    if (this.layout.selectedValue === constants.ABSOLUTE) {
      if (this.layout.selectedPeriod === constants.TOTAL) {
        this.coefficient = 1000;
        return;
      }
      this.coefficient = 10;
    } else {
      this.coefficient = 1;
    }
  }

  onMapHover = (e) => {
    this.selectedCountry = e.target.feature.properties;

    this.popupContent = this.generatePopup();

    this.popup
      .setLatLng(e.latlng)
      .setContent(this.popupContent)
      .openOn(this.map);
  }

  generatePopup() {
    const value = this.layout.selectedPeriod === constants.TODAY
      ? makeTodaykey(this.layout.selectedCase) : this.layout.selectedCase;

    return `<div class="map__popup">
    <p class="type">${this.layout.selectedPeriod}</p>
    <p class="title"><i>Country</i>: ${this.selectedCountry.country}</p>
    <p class="title"><i>${capitalize(this.layout.selectedCase)}</i>:<span class="${this.layout.selectedCase}">${this.layout.selectedValue === constants.ABSOLUTE
  ? round(this.selectedCountry[value]) : getNumbersPer100(this.selectedCountry, value)}</span></p>
            </div>`;
  }

  giveCountriesStyle = (feature) => {
    const value = this.layout.selectedPeriod === constants.TODAY
      ? makeTodaykey(this.layout.selectedCase) : this.layout.selectedCase;

    return {
      fillColor: getCountryColor(feature.properties[value], this.coefficient),
      weight: 0.5,
      color: 'white',
      fillOpacyty: 1,
    };
  }

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.zoomToFeature,
    });
  }

  highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      color: 'yellow',
      dashArray: '',
      fillOpacity: 0.7,
    });
    this.onMapHover(e);
  }

  zoomToFeature = (e) => {
    this.map.fitBounds(e.target.getBounds());
    this.layout.focusedCountry = e.target.feature.properties.country;
    this.layout.update();
  }

  resetHighlight = (e) => {
    this.layergeo.resetStyle(e.target);
  }
}
