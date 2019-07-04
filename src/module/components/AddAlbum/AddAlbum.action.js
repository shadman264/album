import {ADD_ALBUM} from './AddAlbum.constants';

export const addAlbum = newAlbum => {
  return{
    type: ADD_ALBUM,
    payload: newAlbum
  }
}