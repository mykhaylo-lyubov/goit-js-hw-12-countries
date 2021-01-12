import refs from './refs.js';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import checkAmountOfCountries from './amount-check.js';

const debouncedInputCallback = debounce(event => {
  if (event.target.value === '') {
    refs.listItem.innerHTML = '';
    return;
  }
  fetchCountries(event.target.value)
    .then(country => checkAmountOfCountries(country))
    .catch(console.log);
  refs.listItem.innerHTML = '';
}, 500);

refs.input.addEventListener('input', debouncedInputCallback);
