import {combineReducers} from 'redux';
import albumReducer from './module/components/Album/Album.reducer';
import filterReducer from './module/Navbar/Filter/Filter.reducer';

const rootReducer = combineReducers({
    album: albumReducer,
    filter: filterReducer
});

export default rootReducer;