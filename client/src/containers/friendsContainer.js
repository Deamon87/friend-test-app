import { connect } from 'react-redux';
import { fetchFriendList, friendListFetched,
        fetchFriendListNext, friendListNextFetched,
        friendListFilter,
        friendListFilterServer, friendListFilterServerFetched
        } from '../actions/actions';

import FriendsComponent from '../components/friendsComponent';

const mapStateToProps = (state) => {
    if (!state) return {friendList: []};
    return {
        friendList: state.friendList,
        page: state.page,
        filter: state.filter
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
        renewFilter(filter) {
            dispatch(friendListFilter(filter))
        },
        filterByName(name, page) {
            dispatch(friendListFilterServer(name, page)).then((response) => {
                !response.error ?
                    dispatch(friendListFilterServerFetched(response.payload.data)) :
                    '';
            });
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);