export default function getCountryColor(cases, koef) {
  if (cases > koef * 5000) {
    return '#8F0037';
  }

  if (cases > koef * 2000) {
    return '#9A001E';
  }

  if (cases > koef * 1000) {
    return '#d32f2f';
  }

  if (cases > koef * 500) {
    return '#FB000D';
  }

  if (cases > koef * 100) {
    return '#FF4900';
  }

  if (cases > koef * 10) {
    return '#FF7F00';
  }

  if (cases > koef * 1) {
    return '#FFB100';
  }

  return '#FFD700';
}
