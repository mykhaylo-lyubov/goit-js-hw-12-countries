import countriesSearchTemplate from '../templates-handlebars/countries-search-template.hbs';
import relevantCountryTemplate from '../templates-handlebars/relevant-country-template.hbs';
import refs from './refs.js';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
defaults.delay = '1000';

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
}

export default checkAmountOfCountries;
