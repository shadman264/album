import {combineReducers} from 'redux';
import albumReducer from './module/Album/Album.reducer';
const rootReducer = combineReducers({
    album: albumReducer
});

export default rootReducer;