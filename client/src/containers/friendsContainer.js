import { connect } from 'react-redux';
import { fetchFriendList } from '../actions/actions';

import FriendsComponent from '../components/friendsComponent';

const mapStateToProps = (state) => {
    if (!state) return {};
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriendsList: (data) => {
            dispatch(fetchFriendList()).then((response) => {
                !response.error ?
                    dispatch(friendListFetched(response.payload.data)) :
                    '';
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);