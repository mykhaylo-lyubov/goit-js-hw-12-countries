import countriesSearchTemplate from '../templates-handlebars/countries-search-template.hbs';
import relevantCountryTemplate from '../templates-handlebars/relevant-country-template.hbs';
import refs from './refs.js';
import error from './pnotify';
import { info } from '@pnotify/core/dist/PNotify.js';

function checkAmountOfCountries(country) {
  if (country.length >= 10) {
    error({
      text: 'Too many matches found. Please, enter a more specific value!',
    });
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
  if (country.status === 404) {
    info({ text: 'Country was not found' });
  }
}

export default checkAmountOfCountries;
