import {connect} from 'react-redux';
import Album from './Album.component';
import * as albumActions from './Album.action';
import {bindActionCreators} from 'redux';

function mapStateToProps(state) {
    console.log(state);
    return {};
}

function mapDispatchToProps(dispatch) {
    const actions = {...albumActions};
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);