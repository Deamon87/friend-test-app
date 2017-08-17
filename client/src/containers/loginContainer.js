import { connect } from 'react-redux';
import { doLogin, loginSuccess, loginError } from '../actions/actions';
import LoginComponent from '../components/loginComponent';

const mapStateToProps = (state) => {
    return {
       // postsList: state.posts.postsList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (data) => {
            dispatch(doLogin(data)).then((response) => {
                !response.error ?
                    dispatch(loginSuccess(response.payload.data)) :
                    dispatch(loginError(response.payload.data));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);