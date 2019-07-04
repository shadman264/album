import {connect} from 'react-redux';
import Filter from './Filter.component';
import * as filterActions from './Filter.action';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
    const actions = {...filterActions};
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Filter);