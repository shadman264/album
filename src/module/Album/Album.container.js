import {connect} from 'react-redux';
import Album from './Album.component';
import * as albumActions from './Album.action';
import {bindActionCreators} from 'redux';

import _has from 'lodash/has';

function mapStateToProps(state) {
    console.log(state);
    return {
        albumData: _has(state, 'album') ? state.album : []
    }
}

function mapDispatchToProps(dispatch) {
    const actions = {...albumActions};
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);