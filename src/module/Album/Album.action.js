import axios from 'axios';
import * as albumConstants from './Album.constants';

export const getAlbumData = url => {
  return dispatch => {
    dispatch({
      type: albumConstants.GET_ALBUM_DATA_REQUEST,
      payload: null
    });
    axios.get(url)
      .then(res => {
        dispatch({
          type: albumConstants.GET_ALBUM_DATA_REQUEST_SUCCESS,
          payload: res.data
        })
      })
      .catch(e => {
        console.error('Error occured: ', e);
        dispatch({
          type: albumConstants.GET_ALBUM_DATA_REQUEST_FAILURE,
          payload: null
        })
      })
  }
};