import {ADD_ALBUM} from './AddAlbum.constants';

const initialState = {};

const addAlbumReducer = (state = initialState, action) => {
    switch(action.type) {
      // case ADD_ALBUM:
      //   return {
      //     ...state,
      //     ...action.payload
      //   }
			default:
				return state;
		}
}

export default addAlbumReducer;