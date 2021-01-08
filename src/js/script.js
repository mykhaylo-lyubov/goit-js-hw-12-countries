import refs from './refs.js';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';

const countryName = 'Uk'; // for preview only so far

const debouncedInputCallback = debounce(event => {
  fetchCountries(event.target.value);
  refs.listItem.innerHTML = '';
}, 500);

refs.input.addEventListener('input', debouncedInputCallback);
