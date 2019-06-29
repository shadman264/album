import {combineReducers} from 'redux';
import albumReducer from './module/Album/Album.reducer';
const allReducers = combineReducers({
    album: albumReducer
});

export default allReducers;