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
			default:
				return state;
		}
}

export default albumReducer;