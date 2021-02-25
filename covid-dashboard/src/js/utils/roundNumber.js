export default function round(n) {
  const number = Math.floor(n);
  let str = String(number);
  const arr = [...str];

  if (str.length >= 7) {
    arr.splice(-6, 0, ' ');
    arr.splice(-3, 0, ' ');
  } else if (str.length >= 4) {
    arr.splice(-3, 0, ' ');
  }

  str = arr.join('');
  return str;
}
