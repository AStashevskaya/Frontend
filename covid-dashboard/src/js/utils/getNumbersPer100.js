export default function getNumbersPer100(country, selector) {
  const { population } = country;
  const cases = country[selector];

  const per100 = (cases * 100000) / population;

  return per100.toFixed(2);
}
