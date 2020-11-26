import * as constants from './utils/constants'

export default class Game {
  constructor(categories) {
    this.state = constants.STATE_TRAIN
    this.categories = categories
  }
}
