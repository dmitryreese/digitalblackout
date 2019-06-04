import { 
  ADD_CITY,
  REMOVE_CITY,
} from './actions';

// cities
const addCity = cityName => ({ 
  type: ADD_CITY,
  payload: cityName,
});

const removeCity = id => ({ 
  type: REMOVE_CITY,
  payload: id,
});

export {
  addCity,
  removeCity,
};
