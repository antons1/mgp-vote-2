import countries from './countries.json';
import entries from './entries.json';

export function getCountries() {
  return countries;
}

export function getEntries() {
    return entries.map(entry => ({...entry, country: countries.find(country => country.id === entry.countryId)}))
}