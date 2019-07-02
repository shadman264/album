import {connect} from 'react-redux';
import AlbumDetails from './AlbumDetails.component';

import _has from 'lodash/has';

function mapStateToProps(state) {
    return {
        activeAlbum: _has(state, 'album.activeAlbum') ? state.album.activeAlbum : null
    }
}

export default connect(mapStateToProps, null)(AlbumDetails);