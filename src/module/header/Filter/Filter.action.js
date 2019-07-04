import {FILTER_ALBUMS} from './Filter.constants';

export const filterAlbums = albumTitle => {
  return{
    type: FILTER_ALBUMS,
    payload: albumTitle
  }
}