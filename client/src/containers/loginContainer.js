import { connect } from 'react-redux';
import { doLogin, checkLogin, loginSuccess, loginError } from '../actions/actions';
import LoginComponent from '../components/loginComponent';

const mapStateToProps = (state) => {
    if (!state) return {};
    return {
        loggedUser: state.loggedUser
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
        },
        checkLogin: () => {
            dispatch(checkLogin()).then((response) => {
                !response.error ?
                    dispatch(loginSuccess(response.payload.data)):'';
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);