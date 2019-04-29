import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { conditionalExpression } from "@babel/types";
import { fetchAuthorByName } from "./api";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "icellusedkars", user: null };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        console.log(this.state.value, "<<<<<");
        if (this.state.wrongName) {
            return (
                <div className="Header">
                <header className="HeaderText">
                    Questionable News (Flat Earthers Only)
                </header>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        value="Submit"
                        className="button"
                    >
                        Incorrect Username please try again In To Comment or vote
                    </button>
                </form>
            </div>
            );
        } else {
            if (this.state.user) {
                return (
                    <div className="Header">
                        <header className="HeaderText">
                            Questionable News (Flat Earthers Only)
                        </header>
                        <h1> Welcome to weird news {this.state.value}</h1>
                        <form onSubmit={this.handleLogOut}>
                            <button type="submit" value="Submit">
                                Log Out
                            </button>
                        </form>
                    </div>
                );
            } else {
                return (
                    <div className="Header">
                        <header className="HeaderText">
                            Questionable News (Flat Earthers Only)
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <button
                                type="submit"
                                value="Submit"
                                className="button"
                            >
                                Please Log In To Comment or vote
                            </button>
                        </form>
                    </div>
                );
            }
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        fetchAuthorByName(this.state.value).then(user => {
            if(this.state.value){
            if (user.data.user.length) {
                this.setState({ user: this.state.value, wrongName: false });
            } else {
                this.setState({ user: null, wrongName: true });
            }}
        });
    };
    handleLogOut = event => {
        event.preventDefault();
        console.log(null, "<<<");
        this.setState({ user: null, value: "" });
    };
}
export default Header;
