import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({
    getInitialState(){
        return {
            login: "",
            password: "",
        }
    },

    userNameChanged(ev) {
        var input = ev.target;
        var update = {login : input.value};

        this.setState(update);
    },

    passwordChanged(ev) {
        var input = ev.target;
        var update = {password : input.value};

        this.setState(update);
    },

    doLogin() {
        console.log(this.state);
    },

    render() {
        let errorMessage = null;

        const showError = (errorMessage != null);
        return (
            <div className="react-login">
                <div className="row">
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <label for="usr">Name:</label>
                        <input type="text" className="form-control" id="usr" onChange={this.userNameChanged}></input>
                    </div>
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.passwordChanged}></input>
                    </div>
                    <div className="form-group col-sm-8 col-sm-offset-2">
                        <button className="btn btn-default col-sm-12" onClick={this.doLogin}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
});