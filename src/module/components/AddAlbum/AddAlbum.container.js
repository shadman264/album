import {connect} from 'react-redux';
import AddAlbum from './AddAlbum.component';
import * as addAlbumActions from './AddAlbum.action';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
    const actions = {...addAlbumActions};
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(AddAlbum);