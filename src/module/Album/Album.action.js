import axios from 'axios';
import * as albumConstants from './Album.constants';

export const getAlbumData = url => {
  axios.get(url)
    .then(res => {
      return ({
        type: albumConstants.GET_ALBUM_DATA,
        payload: res.data
      });
    })
    .catch(e => {
      console.error('error occured: ', e);
    })
};