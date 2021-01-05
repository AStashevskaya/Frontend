/* eslint-disable no-debugger */
/* eslint-disable no-console */
import create from './utils/create';
import getWeekDay from './utils/getWeekDay';
import getMonth from './utils/getMonth';
import CovidApi from './CovidApi';
import round from './utils/roundNumber';
import addZero from './utils/addZero';
import * as constants from './utils/constants';

export default class UpdateBoard {
  constructor(layout) {
    this.layout = layout;
    this.data = null;
    this.container = create('div', 'updateBoard');
  }

  init() {
    CovidApi.getUpdatedWorldData().then((data) => {
      this.data = data;
    }).then(() => {
      this.getData();
    })
      .then(() => this.render());
  }

  getData() {
    const date = new Date(this.data.updated);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const weekDay = date.getDay();
    const hours = date.getHours();
    const minuets = date.getMinutes();
    const seconds = date.getSeconds();

    this.date = `${getWeekDay(weekDay)}, ${getMonth(month)} ${day} ${year}, ${addZero(hours)}:${addZero(minuets)}:${addZero(seconds)}`;
  }

  render() {
    this.container.innerHTML = `<div class="updateBoard__date">
  <p>LAST UPDATE</p>
  <p class="updateBoard__date-number">${this.date}</p>
</div>
<div class="updateBoard__front">
  <div class="updateBoard__case">
  <p class="updateBoard__type">GLOBAL CONFIRMED</p>
  <p class="updateBoard__number cases">${round(this.data.cases)}</p>
  </div>
  <div class="updateBoard__case">
    <p class="updateBoard__type">GLOBAL RECOVERED</p>
    <p class="updateBoard__number recovered">${round(this.data.recovered)}</p>
    </div>
    <div class="updateBoard__case">
      <p class="updateBoard__type">GLOBAL DEATHS</p>
      <p class="updateBoard__number deaths">${round(this.data.deaths)}</p>
      </div>
      <span class="updateBoard__btn" id='front-btn'>TODAY</span>
</div>
<div class="updateBoard__back">
  <div class="updateBoard__case">
    <p class="updateBoard__type">TODAY CONFIRMED</p>
    <p class="updateBoard__number cases">${round(this.data.todayCases)}</p>
    </div>
    <div class="updateBoard__case">
      <p class="updateBoard__type">TODAY RECOVERED</p>
      <p class="updateBoard__number recovered">${round(this.data.todayRecovered)}</p>
      </div>
      <div class="updateBoard__case">
        <p class="updateBoard__type">TODAY DEATHS</p>
        <p class="updateBoard__number deaths">${round(this.data.todayDeaths)}</p>
        </div>
        <span class="updateBoard__btn" id='back-btn'>GLOBAL</span>
</div>`;

    this.layout.container.appendChild(this.container);
    UpdateBoard.initClicks();
  }

  static initClicks() {
    const buttons = [...document.querySelectorAll('.updateBoard__btn')];
    buttons.forEach((el) => el.addEventListener('click', UpdateBoard.rotate));
  }

  static rotate = () => {
    debugger;
    const btnFront = document.querySelector('.updateBoard__front');
    const btnBack = document.querySelector('.updateBoard__back');

    const frontClassesLength = btnFront.classList.length;
    const backClassesLength = btnBack.classList.length;

    if (frontClassesLength > 1 || backClassesLength > 1) {
      btnFront.classList.remove(constants.FRONT_ROTATE);
      btnBack.classList.remove(constants.BACK_ROTATE);
    } else {
      btnFront.classList.add(constants.FRONT_ROTATE);
      btnBack.classList.add(constants.BACK_ROTATE);
    }
  }
}
