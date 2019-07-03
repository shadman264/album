import {FILTER_ALBUMS} from './Filter.constants';

const initialState = '';

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
      case FILTER_ALBUMS:
        return {
          ...state,
          filterAlbumTitle: action.payload
        }
			default:
				return state;
		}
}

export default filterReducer;