/* eslint-disable no-console */
import Chart from 'chart.js';
import CovidApi from './CovidApi';
import Switcher from './Switcher';
import FullScreenBtn from './FullScreenBtn';
import create from './utils/create';
import * as constants from './utils/constants';
import capitalize from './utils/capitalize';

export default class ChartWrap {
  constructor(layout) {
    this.layout = layout;
    this.container = create('div', 'chart__wrapper');
    this.headerContainer = create('div', 'component-header');
    this.currentChart = create('canvas');
    this.type = 'global';
    this.colors = {
      cases: 'rgba(255, 206, 86, 1)',
      deaths: 'rgba(255, 99, 132, 1)',
      recovered: 'rgba(75, 192, 192, 1)',
    };

    this.getCountriesData();
  }

  getCountriesData() {
    CovidApi.getHistoryByCountry().then((answer) => {
      this.countriesData = answer;
    });
  }

  init() {
    if (this.type === 'global') {
      CovidApi.getGlobalHistory().then((data) => {
        this.data = data;
      }).then(() => this.generateLayout());
    }
  }

  generateLayout() {
    this.switcher = new Switcher(this, 'chart');
    this.fullScreenBtn = new FullScreenBtn(this);
    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.currentChart);
    this.layout.container.appendChild(this.container);
    this.generateChart();

    this.initClicks();
  }

  initClicks() {
    this.switcher.initializeClicks();
    this.fullScreenBtn.initializeClicks();
  }

  generateChart = () => {
    if (this.chart) {
      this.chart.reset();
    }

    const period = this.layout.selectedPeriod;
    const currentCase = this.layout.selectedCase;

    if (this.layout.focusedCountry) {
      const country = this.countriesData.find((el) => el.country === this.layout.focusedCountry);
      this.chart = this.createChart(this.colors[this.layout.selectedCase], this.currentChart,
        `${country.country} ${period}-${currentCase}`, country.timeline[currentCase]);
    } else {
      this.chart = this.createChart(this.colors[currentCase], this.currentChart, `${capitalize(period)}-${currentCase}`, this.data[currentCase]);
    }
  }

  createAmmountCases = (data) => {
    let result;
    const arr = Object.values(data);
    if (this.layout.selectedValue === constants.ABSOLUTE) {
      if (this.layout.selectedPeriod === constants.TODAY) {
        const arrDaily = arr.map((_, i) => (arr[i] - arr[i - 1]));
        result = arr.slice(0, 1).concat(arrDaily.slice(1));
      } else {
        result = arr;
      }
    }

    if (this.layout.selectedValue === constants.PER_100) {
      if (this.layout.selectedPeriod === constants.TODAY) {
        const arr100K = arr.map((_, i) => (Math.round((arr[i] - arr[i - 1]) / 100000))).slice(1);
        const arrFirst = arr.map((_, i) => (Math.round(arr[i] / 100000))).slice(0, 1);
        result = arrFirst.concat(arr100K);
      } else {
        result = arr.map((x) => Math.round(x / 100000));
      }
    }

    return result;
  }

  update() {
    this.chart.reset();

    const currentCase = this.layout.selectedCase;
    const period = this.layout.selectedPeriod;

    if (this.layout.focusedCountry) {
      const country = this.countriesData.find((el) => el.country === this.layout.focusedCountry);

      this.chart.data.labels = Object.keys(country.timeline[currentCase]);
      this.chart.data.datasets[0].label = `${country.country} ${capitalize(period)}-${currentCase}`;
      this.chart.data.datasets[0].data = this.createAmmountCases(country.timeline[currentCase]);
      this.chart.data.datasets[0].backgroundColor = this.colors[currentCase];
    } else {
      this.chart.data.labels = Object.keys(this.data[currentCase]);
      this.chart.data.datasets[0].label = `${currentCase}`;
      this.chart.data.datasets[0].data = this.createAmmountCases(this.data[currentCase]);
      this.chart.data.datasets[0].backgroundColor = this.colors[currentCase];
    }

    this.chart.update();
  }

  createChart = (barColor, chartContainer, name, data) => new Chart(chartContainer, {
    type: 'bar',
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: name,
        data: this.createAmmountCases(data),
        backgroundColor: barColor,
        borderWidth: 0,
        barThickness: 'flex',
        barPercentage: 1,
        categoryPercentage: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 10000000,
            callback: (value) => {
              const ranges = [
                { divider: 1e6, suffix: 'M' },
                { divider: 1e3, suffix: 'k' },
              ];
              function formatNumber(n) {
                for (let i = 0; i < ranges.length; i += 1) {
                  if (n >= ranges[i].divider) {
                    return (n / ranges[i].divider).toString() + ranges[i].suffix;
                  }
                }
                return Math.round(n);
              }
              return formatNumber(value);
            },
          },
        }],
      },
    },
  });
}
