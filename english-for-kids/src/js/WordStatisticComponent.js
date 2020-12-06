export default class WordStatistic {
  constructor(word, category) {
    this.category = category.title;
    this.word = word.english;
    this.translation = word.russian;
    this.train = 0;
    this.correct = 0;
    this.wrong = 0;
  }
}
