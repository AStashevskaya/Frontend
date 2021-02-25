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
    this.chartContainer = create('div', 'chart__container');
    this.currentChart = create('canvas');
    this.type = 'global';
    this.colors = {
      cases: constants.yellow,
      deaths: constants.red,
      recovered: constants.green,
    };

    this.getData();
  }

  getData() {
    CovidApi.getEachCountryData().then((answer) => {
      this.countriesData = answer;
    }).then(CovidApi.getUpdatedWorldData().then((data) => {
      this.worldData = data;
    }));
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
    this.chartContainer.appendChild(this.currentChart);
    this.container.appendChild(this.chartContainer);
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
      console.log(this.chart);
    }
  }

  createAmmountCases(data) {
    const arr = Object.values(data);
    if (this.layout.selectedValue === constants.ABSOLUTE) {
      return this.createAbsCases(arr);
    }

    return this.create100kCases(arr);
  }

  createAbsCases(arr) {
    if (this.layout.selectedPeriod === constants.TODAY) {
      const arrDaily = arr.map((_, i) => (Math.abs(arr[i] - arr[i - 1])));
      return arr.slice(0, 1).concat(arrDaily.slice(1));
    }
    return arr;
  }

  create100kCases(arr) {
    let population;

    if (this.layout.focusedCountry) {
      const country = this.countriesData.find((el) => el.country === this.layout.focusedCountry);
      population = country.population;
    } else {
      population = this.worldData.population;
    }

    if (this.layout.selectedPeriod === constants.TODAY) {
      const arr100K = arr.map((_, i) => (Math.abs(+(((arr[i] - arr[i - 1]) * 100000)
       / population).toFixed(2)))).slice(1);
      const firstAmount = +(((arr[0] * 100000) / population).toFixed(2));
      const arrFirst = [];
      arrFirst.push(firstAmount);
      return arrFirst.concat(arr100K);
    }
    // eslint-disable-next-line no-unused-vars
    return arr.map((x) => +((x * 100000) / population).toFixed(2));
  }

  update() {
    this.chart.reset();
    this.chart.options.scales.xAxes[0].ticks.maxRotation = 26;
    this.chart.options.scales.xAxes[0].ticks.minRotation = 12;

    if (this.layout.focusedCountry) {
      // this.updateChartCountry();
      this.getDataofCountry();
    } else {
      this.updateChartGlobal();
    }
  }

  updateChartGlobal() {
    const currentCase = this.layout.selectedCase;
    const period = this.layout.selectedPeriod;

    this.chart.data.labels = Object.keys(this.data[currentCase]);
    this.chart.data.datasets[0].label = `${currentCase}`;
    this.chart.data.datasets[0].data = this.createAmmountCases(this.data[currentCase]);
    this.chart.data.datasets[0].backgroundColor = this.colors[currentCase];

    if (this.layout.selectedValue === constants.ABSOLUTE) {
      this.chart.options.scales.yAxes[0].ticks.stepSize = period
      === constants.TODAY ? 100000 : 10000000;
    } else {
      this.chart.options.scales.yAxes[0].ticks.stepSize = period
      === constants.TODAY ? 10 : 100;
    }

    this.chart.update();
  }

  getDataofCountry() {
    console.log(this.layout.focusedCountry);
    CovidApi.getCountryHistory(this.layout.focusedCountry)
      .then((answer) => {
        this.removeResponse();
        const chart = document.querySelector('.chart__container');

        if (chart.classList.contains('hidden')) {
          chart.classList.remove('hidden');
        }
        if (answer.message) {
          chart.classList.add('hidden');
          this.addResponse();
        } else {
          this.updateChartCountry(answer);
        }
      });
  }

  addResponse() {
    const resposeBox = create('div', 'response-box');
    resposeBox.innerHTML = `Unfortunatly, we have no history data for ${this.layout.focusedCountry}.`;
    this.container.appendChild(resposeBox);
  }

  removeResponse() {
    const resposeBox = document.querySelector('.response-box');
    if (resposeBox) {
      this.container.removeChild(resposeBox);
    }
  }

  updateChartCountry(data) {
    const currentCase = this.layout.selectedCase;
    const period = this.layout.selectedPeriod;

    this.chart.data.labels = Object.keys(data.timeline[currentCase]);
    this.chart.data.datasets[0].label = `${data.country} ${capitalize(period)}-${currentCase}`;
    this.chart.data.datasets[0].data = this.createAmmountCases(data.timeline[currentCase]);
    this.chart.data.datasets[0].backgroundColor = this.colors[currentCase];

    if (this.layout.selectedValue === constants.ABSOLUTE) {
      this.chart.options.scales.yAxes[0].ticks.stepSize = period
      === constants.TODAY ? 1000 : 100000;
    } else {
      this.chart.options.scales.yAxes[0].ticks.stepSize = period
      === constants.TODAY ? 5 : 20;
    }

    this.chart.update();
  }

  createChart = (barColor, chartContainer, name, data) => new Chart(chartContainer, {
    type: 'bar',
    data: {
      labels: Object.keys(this.data[this.layout.selectedCase]),
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
        xAxes: [
          {
            ticks: {
              // max: 12,
              // min: 12,
              maxRotation: 12,
              minRotation: 12,
            },
          },
        ],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 10000000,
            maxRotation: 10,
            // callback: (value) => {
            //   const ranges = [
            //     { divider: 1e6, suffix: 'M' },
            //     { divider: 1e3, suffix: 'k' },
            //   ];
            //   function formatNumber(n) {
            //     for (let i = 0; i < ranges.length; i += 1) {
            //       if (n >= ranges[i].divider) {
            //         return (n / ranges[i].divider).toString() + ranges[i].suffix;
            //       }
            //     }
            //     return Math.round(n);
            //   }
            //   return formatNumber(value);
            // },
          },
        }],
      },
    },
  });
}
