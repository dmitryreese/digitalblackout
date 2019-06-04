import { ADD_CITY, REMOVE_CITY } from '../actions/actions';

const initialState = JSON.parse(localStorage.getItem('__incrediblyAwesomeWeatherAppCities')) || [];

const cities = (cities=initialState, { type, payload }) => {
  if (type === ADD_CITY) {
    cities = [...cities, payload];
  }

  if (type === REMOVE_CITY) {
    cities = cities.filter(city => city !== payload);
  }

  localStorage.setItem('__incrediblyAwesomeWeatherAppCities', JSON.stringify(cities));
  return cities;
};

export default cities;
