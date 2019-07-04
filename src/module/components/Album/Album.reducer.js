import * as albumConstants from './Album.constants';
import {ADD_ALBUM} from '../AddAlbum/AddAlbum.constants';

const initialState = [];

const albumReducer = (state = initialState, action) => {
    switch(action.type) {
			case albumConstants.GET_ALBUM_DATA_REQUEST:
				return state;
			case albumConstants.GET_ALBUM_DATA_REQUEST_SUCCESS:
				return {
					...state,
					data: [...action.payload]
				}
			case albumConstants.GET_ALBUM_DATA_REQUEST_FAILURE:
				return state;
			case albumConstants.GET_ALBUM_DETAILS:
				return {
					...state,
					activeAlbum: action.payload
				}
			case ADD_ALBUM:
				let newState = {...state};
				const newAlbumId = newState.data[newState.data.length - 1].id + 1;
				const newAlbum = {...action.payload, id: newAlbumId}
				newAlbum.albumId = parseInt(newAlbum.albumId);
				newState.data = [...newState.data, newAlbum];
        return {
          ...newState
        }
			default:
				return state;
		}
}

export default albumReducer;