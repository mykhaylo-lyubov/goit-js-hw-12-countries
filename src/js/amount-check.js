import countriesSearchTemplate from '../templates-handlebars/countries-search-template.hbs';
import relevantCountryTemplate from '../templates-handlebars/relevant-country-template.hbs';
import refs from './refs.js';

function checkAmountOfCountries(country) {
  if (country.length >= 10) {
    console.log('More than 10 countries');
  }
  if (country.length < 10 && country.length >= 2) {
    refs.listItem.insertAdjacentHTML(
      'afterbegin',
      countriesSearchTemplate(country),
    );
  }
  if (country.length === 1) {
    refs.listItem.insertAdjacentHTML(
      'afterbegin',
      relevantCountryTemplate(country),
    );
  }
}

export default checkAmountOfCountries;
