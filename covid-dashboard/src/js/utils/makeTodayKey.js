import capitalize from './capitalize';

export default function makeTodaykey(key) {
  const type = capitalize(key);
  const newKey = `today${type}`;
  return newKey;
}
