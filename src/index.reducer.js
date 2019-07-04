import {combineReducers} from 'redux';
import albumReducer from './module/components/Album/Album.reducer';
import filterReducer from './module/Navbar/Filter/Filter.reducer';
import addAlbumReducer from './module/components/AddAlbum/AddAlbum.reducer';

const rootReducer = combineReducers({
    album: albumReducer,
    filter: filterReducer,
    addAlbum: addAlbumReducer
});

export default rootReducer;