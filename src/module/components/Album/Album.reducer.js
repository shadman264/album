import * as albumConstants from './Album.constants';

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
			case albumConstants.ADD_ALBUM:
				let newState = {...state};
				// const newAlbumId = newState.data[newState.data.length - 1].id + 1;
				// const newAlbum = {...action.payload, id: newAlbumId}
				newState.data = [...newState.data, action.payload];
        return {
          ...newState
        }
			default:
				return state;
		}
}

export default albumReducer;