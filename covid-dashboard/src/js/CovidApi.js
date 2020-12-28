import * as constants from './utils/constants';

export default class CovidApi {
  static getGlobalData() {
    return fetch(constants.URL_COVID_GLOBAL)
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
    return fetch(constants.URL_INCREASE_BY_COUNTRY)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }

  static getUpdatedWorldData() {
    return fetch(constants.URL_GLOBAL_UPDATE)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }

  static getGlobalHistory() {
    return fetch(constants.URL_COVID_GLOBAL)
      .then((answer) => answer.json())
      .catch((e) => {
        throw new Error(`er${e}`);
      });
  }
}
