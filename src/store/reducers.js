import { combineReducers } from 'redux';
import activeAdvert from '../components/Advert/reducer';
import search from '../components/Search/reducer';

export default combineReducers({ activeAdvert, search });
