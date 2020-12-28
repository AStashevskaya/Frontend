export default function capitalize(key) {
  const arr = key.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}
