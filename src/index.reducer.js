import {combineReducers} from 'redux';
import albumReducer from './module/components/Album/Album.reducer';
const rootReducer = combineReducers({
    album: albumReducer
});

export default rootReducer;