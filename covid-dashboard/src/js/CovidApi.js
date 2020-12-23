import * as constants from './utils/constants';

export default class CovidApi {
  static getGlobalData() {
    return fetch(constants.URL_COVID_BY_COUNTRIES)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }

  static getEachCountryData() {
    return fetch(constants.URL_COVID_BY_COUNTRIES)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }

  static getHistoryByCountry() {
    return fetch(constants.URL_COVID_BY_COUNTRIES)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }
}
