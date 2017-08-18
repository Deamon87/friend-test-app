import { connect } from 'react-redux';
import { fetchFriendList, friendListFetched,
        fetchFriendListNext, friendListNextFetched} from '../actions/actions';

import FriendsComponent from '../components/friendsComponent';

const mapStateToProps = (state) => {
    if (!state) return {friendList: []};
    return {
        friendList: state.friendList,
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriendsList: (data) => {
            dispatch(fetchFriendList(data)).then((response) => {
                !response.error ?
                    dispatch(friendListFetched(response.payload.data)) :
                    '';
            });
        },

        fetchFriendsListNext: (page) => {
            dispatch(fetchFriendListNext(page)).then((response) => {
                !response.error ?
                    dispatch(friendListNextFetched(response.payload.data)) :
                    '';
            });
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);