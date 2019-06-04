import { createStore } from 'redux';

import rootReducer from './reducers';

const initStore = (state={}) => createStore(rootReducer, state);

export default initStore;
