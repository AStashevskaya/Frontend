export default class Category {
  constructor(game, options) {
    this.game = game;
    this.state = game.state
    this.image = options.image;
    this.title = options.title;
    this.cards = options.cards;
    this.init()
  }

  init() {
    this.cards = this.cards.map((el) => new Card(this, el))
    this.content = this.render()
    // this.generateLayout()
    // this.render()
  }

  generateLayout() {
    this.container = create('div', `${this.title}`)
    document.querySelector('.content-container').appendChild(this.container)
  }

  render() {
    let html = ''

    this.cards.forEach((el) => {
      html += el.render()
    })
    // this.container.innerHTML = html
    return html
  }
}
