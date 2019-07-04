import {connect} from 'react-redux';
import AddAlbum from './AddAlbum.component';
import * as albumActions from '../Album/Album.action';
import {bindActionCreators} from 'redux';

import _has from 'lodash/has';

function mapStateToProps(state) {
    return {
        albumData: _has(state, 'album.data') ? state.album.data : []
    }
}

function mapDispatchToProps(dispatch) {
    const actions = {...albumActions};
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);