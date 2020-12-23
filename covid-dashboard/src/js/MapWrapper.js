/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import create from './utils/create';
import getCountryColor from './utils/getCountryColor';
import getNumbersPer100 from './utils/getNumbersPer100';
import round from './utils/roundNumber';
import CovidApi from './CovidApi';
import * as constants from './utils/constants';

import { features } from './data/countries.json';

export default class MapWrapper {
  constructor(layout) {
    this.layout = layout;
    this.data = [];
    this.mapOptions = {
      center: [20, 20],
      zoom: 2,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topleft',
      },
    };
    this.coefficient = 1000;
    this.selectedType = constants.GLOBAL_CASES;
    this.selectedValue = constants.ABSOLUTE;
    this.container = create('div', 'map__wrapper');
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
    console.log(database);
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
        // const { lat, long: lng } = countryInfo;
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
    console.log(this.GeoJson);
  }

  generateLayout() {
    this.generateSelectors();

    this.mapContainer.setAttribute('id', 'map');
    this.container.appendChild(this.mapContainer);

    document.body.appendChild(this.container);
    this.initializeClicks();

    this.map = L.map('map', this.mapOptions);

    this.layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.map);

    this.layergeo = L.geoJSON(this.GeoJson, {
      style: this.giveCountriesStyle,
      onEachFeature: this.onEachFeature,
    })
      .addTo(this.map);

    this.popup = L.popup();
    // this.generateFullScreenBtn();
    this.generateLegend();
  }

  generateSelectors() {
    const selectorWrapper = create('form', 'map__selector-wrapper');

    const typeSelector = create('select', 'map__selector');
    typeSelector.setAttribute('name', 'types');
    typeSelector.setAttribute('id', 'mapType');
    typeSelector.innerHTML = `<option value="${constants.GLOBAL_CASES}">Total Cases</option>
    <option value="${constants.GLOBAL_RECOVERED}" >Total Recovered</option>
    <option value="${constants.GLOBAL_DEATHS}" >Total Deaths</option>
    <option value="${constants.TODAY_CASES}">Today Cases</option>
    <option value="${constants.TODAY_RECOVERED}">Today Recovered</option>
    <option value="${constants.TODAY_DEATHS}">Today Deaths</option>`;

    const valueSelector = create('select', 'map__selector');
    valueSelector.setAttribute('name', 'values');
    valueSelector.setAttribute('id', 'mapValue');
    valueSelector.innerHTML = `<option value="${constants.ABSOLUTE}">${constants.ABSOLUTE}</option>
    <option value="${constants.PER_100}"  id="${constants.PER_100}">Per 100 thousands</option>`;

    selectorWrapper.appendChild(typeSelector);
    selectorWrapper.appendChild(valueSelector);
    this.container.appendChild(selectorWrapper);
  }

  generateLegend() {
    this.legend = L.control({ position: 'bottomright' });
    // eslint-disable-next-line no-unused-vars
    this.legend.onAdd = (map) => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, (this.coefficient * 1), (this.coefficient * 10), (this.coefficient * 100), (this.coefficient * 500),
        (this.coefficient * 1000), (this.coefficient * 2000), (this.coefficient * 5000)];
      // const labels = [];
      for (let i = 0; i < grades.length; i += 1) {
        if (i + 1 === grades.length) {
          div.innerHTML += `<span><i style="background:${getCountryColor(grades[i] + 1, this.coefficient)}"></i> ${grades[i]} + </span>`;
        } else {
          div.innerHTML
        += `<span><i style="background:${getCountryColor(grades[i] + 1, this.coefficient)}"></i> ${grades[i]} &ndash; ${grades[i + 1]} </span>`;
        }
      }
      return div;
    };
    this.legend.addTo(this.map);
  }

  initializeClicks() {
    const type = document.querySelector('#mapType');
    type.addEventListener('click', this.getSelectedMapType);

    const value = document.querySelector('#mapValue');
    value.addEventListener('click', this.getSelectedMapValue);
  }

  getSelectedMapType = (e) => {
    const newValue = e.target.value;

    if (this.selectedType === newValue) return;

    this.selectedType = newValue;
    console.log(this.selectedType);
    this.updateMap();
  }

  getSelectedMapValue = (e) => {
    const newValue = e.target.value;

    if (this.selectedValue === newValue) return;

    this.selectedValue = newValue;
    console.log(this.selectedValue);
    this.updateMap();
  }

  updateMap() {
    this.layergeo.refresh();
  }

  updateCoeficient() {
    if (this.layout.indicator === constants.GLOBAL_CASES) {
      this.coefficient = 1000;
    }

    if (this.layout.indicator === constants.TODAY_CASES) {
      this.coefficient = 1;
    }

    if (this.layout.indicator === constants.GLOBAL_PER_100) {
      this.coefficient = 0.1;
    }

    if (this.layout.indicator === constants.TODAY_PER_100) {
      this.coefficient = 0.01;
    }
  }

      onMapHover = (e) => {
        this.selectedCountry = e.target.feature.properties;

        if (this.selectedValue === constants.ABSOLUTE) {
          this.popupContent = this.generatePopup();
        }

        if (this.selectedValue === constants.PER_100) {
          this.popupContent = this.generatePopupPer100();
        }

        this.popup
          .setLatLng(e.latlng)
          .setContent(this.popupContent)
          .openOn(this.map);
      }

      generatePopup() {
        return ` <div class="popup">
        <p class="popup__line">
        <span class='title'>${!this.selectedType.startsWith('today')
    ? 'Total' : 'Today'}</span>
    </p>
        <p class="popup__line">
            <span class="title">Country:</span>
            <span class='country'>${this.selectedCountry.country}</span>
        </p>
        <p class="popup__line">
            <span class="title">Cases:</span>
            <span class='all'>${!this.selectedType.startsWith('today')
    ? round(this.selectedCountry.cases) : round(this.selectedCountry.todayCases)}</span>
        </p>
        <p class="popup__line">
            <span class="title">Recovered</span>
            <span class='recovered'>${!this.selectedType.startsWith('today')
    ? round(this.selectedCountry.recovered) : round(this.selectedCountry.todayRecovered)}</span>
        </p>
            <p class="popup__line">
            <span class="title">Deaths</span>
        <span class='deaths'>${!this.selectedType.startsWith('today')
    ? round(this.selectedCountry.deaths) : round(this.selectedCountry.todayDeaths)}</span>
        </p>
        </div>`;
      }

      generatePopupPer100() {
        return ` <div class="popup">
        <p class="popup__line">
        <span class='title'>${!this.selectedType.startsWith('today')
    ? 'Total' : 'Today'}</span>
    </p>
        <p class="popup__line">
            <span class="title">Country:</span>
            <span class='country'>${this.selectedCountry.country}</span>
        </p>
        <p class="popup__line">
            <span class="title">Cases:</span>
            <span class='all'>${!this.selectedType.startsWith('today')
    ? getNumbersPer100(this.selectedCountry, constants.GLOBAL_CASES)
    : getNumbersPer100(this.selectedCountry, constants.TODAY_CASES)}</span>
        </p>
        <p class="popup__line">
            <span class="title">Recovered</span>
            <span class='recovered'>${!this.selectedType.startsWith('today')
    ? getNumbersPer100(this.selectedCountry, constants.GLOBAL_RECOVERED)
    : getNumbersPer100(this.selectedCountry, constants.TODAY_RECOVERED)}</span>
        </p>
            <p class="popup__line">
            <span class="title">Deaths</span>
        <span class='deaths'>${!this.selectedType.startsWith('today')
    ? getNumbersPer100(this.selectedCountry, constants.GLOBAL_DEATHS)
    : getNumbersPer100(this.selectedCountry, constants.TODAY_DEATHS)}</span>
        </p>
        </div>`;
      }

      giveCountriesStyle = (feature) => ({
        fillColor: getCountryColor(feature.properties[this.selectedType], this.coefficient),
        weight: 0.5,
        color: 'white',
        fillOpacyty: 1,
      })

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
        console.log(e.target);
        this.map.fitBounds(e.target.getBounds());
      }

      resetHighlight = (e) => {
        this.layergeo.resetStyle(e.target);
      }
}
