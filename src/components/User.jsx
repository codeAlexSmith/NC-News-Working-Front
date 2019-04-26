import React, { Component } from "react";
import { Router, Link } from "@reach/router";

class User extends Component {
    state = { user: null };
    render() {
         const user = this.state.user
        if (user) {
            return <header>Hello</header>
        }else{
            return <header>Log in</header>
        }
    }
    componentDidUpdate (){
        
        this.setState({user: user})
    }
}


export default User;
