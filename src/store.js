import { createStore } from 'redux';
import reducer from './components/pages/reducers/reducer';

const store = createStore(reducer);

export default store;