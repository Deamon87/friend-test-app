import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

export default class FriendsComponent extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        this.state = {friendList: []};
    }

    componentWillMount() {
        this.props.fetchFriendsList();
    }

    goNextPage() {
        var page = this.props.page ? this.props.page : 0;
        page = page + 1;

        this.props.fetchFriendsListNext(page);
    }

    goPrevPage() {
        var page = this.props.page ? this.props.page : 0;
        if (page > 0) {
            page = page - 1;
        }
        this.props.fetchFriendsListNext(page);
    }

    render() {
        return (
        <div className="container">
            <p className="text-center h3">Friends list</p>
            <div className="row">

            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Birth date</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.friendList.map((a, key) =>
                    <tr key={key}>
                        <td>{a.name}</td>
                        <td>{a.lastname}</td>
                        <td>{a.age}</td>
                        <td>{a.gender}</td>
                        <td>{a.birthDate}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            <div className="row">
                <div className="col-sm-2">
                    <button className="btn btn-default col-sm-12" onClick={this.goPrevPage.bind(this)}>Prev</button>
                </div>
                <div className="col-sm-2 col-sm-offset-8">
                    <button className="btn btn-default col-sm-12" onClick={this.goNextPage.bind(this)}>Next</button>
                </div>
            </div>
        </div>
        )
    }

}