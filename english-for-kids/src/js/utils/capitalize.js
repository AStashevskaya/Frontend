export default function capitalize(word) {
  let newWord = word.split('');
  newWord[0] = newWord[0].toUpperCase();
  newWord = newWord.join('');
  return newWord;
}
