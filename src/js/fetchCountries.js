import checkAmountOfCountries from './amount-check.js';

function fetchCountries(countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
  return fetch(url)
    .then(res => res.json())
    .then(country => checkAmountOfCountries(country))
    .catch(console.log);
}

export default fetchCountries;
