import { combineReducers } from 'redux';
import counter from '../components/TestPage/counter';
import activeAdvert from '../components/Advert/reducer';

export default combineReducers({
    counter,
    activeAdvert
})