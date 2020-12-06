export default class WordStatistic {
  constructor(word, category) {
    this.category = category.title;
    this.english = word.english;
    this.russian = word.russian;
    this.trainClick = 0;
    this.correctClick = 0;
    this.wrongClick = 0;
  }
}
