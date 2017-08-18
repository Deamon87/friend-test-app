import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

export default class LoginComponent extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
        }
    }

    componentWillMount() {
        this.props.checkLogin();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedUser && nextProps.loggedUser.isLogged) {

            this.context.router.push('/friends');
        }
    }

    userNameChanged(ev) {
        var input = ev.target;
        var update = {login : input.value};

        this.setState(update);
    }

    passwordChanged(ev) {
        var input = ev.target;
        var update = {password : input.value};

        this.setState(update);
    }

    doLogin() {
        this.props.doLogin(this.state);
    }

    render() {
        return (
            <div className="react-login">
                <div className="row">
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <label for="usr">Name:</label>
                        <input type="text" className="form-control" id="usr" onChange={this.userNameChanged.bind(this)}></input>
                    </div>
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.passwordChanged.bind(this)}></input>
                    </div>
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <button className="btn btn-default col-sm-12" onClick={this.doLogin.bind(this)}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
};