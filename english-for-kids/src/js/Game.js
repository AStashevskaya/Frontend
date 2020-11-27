import * as constants from './utils/constants';
// import onNavigate from './utils/onNavigate';
// import create from './utils/create'

export default class Game {
  constructor(categories) {
    this.state = 'train'
    this.categories = categories
    this.init()
  }

  init() {
    this.categories = this.categories.map((el) => new Category(this, el))
    this.content = this.render()

    this.generateRoutingMap()
    this.generateLayout()

    // this.initializeClickhandler()
  }

  generateLayout() {
    this.main = document.querySelector('.content-container')
    this.main.innerHTML = this.content
    // this.main.innerHTML = routes[window.location.pathname ]
  }

  generateRoutingMap() {
    constants.routes['/'] = this.content
    this.categories.forEach((el) => {
      constants.routes[`/${el.title}`] = el.content
    })
    // console.log(routes)
  }

  render() {
    let html = ''

    this.categories.forEach((el) => {
      html += `
      <div class="category-card" data-category="${el.title}">
      <a href="#" class="category-card__wrap" onclick="onNavigate('/${el.title}'); return false">
      <div class="category-card__image"><img src="assets/images/bird.jpg" alt="${el.title}"></div>
      <div class="category-card__title">${el.title}</div>
      </a>
      </div>`
    })
    return html
  }
}
