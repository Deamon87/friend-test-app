import { connect } from 'react-redux';
import { doLogin, loginSuccess, loginError } from '../actions/actions';

import FriendsComponent from '../components/friendsComponent';

const mapStateToProps = (state) => {
    if (!state) return {};
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriendsList: (data) => {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);