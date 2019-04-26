import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Authors from "./components/Authors";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Home from "./components/Home";
import ArticleComments from "./components/ArticleComments";

class App extends Component {
    state = { loggedIn: false };
    
    render() {
        const loggedIn = this.state.loggedIn;
      
            return (
                <div className="App">
                    <Header />
                    <SideBar />
                    <Router>
                        <Home path="/" />
                        <Topics path="/Topics" />
                        <Authors path="/Authors" />
                        <Articles path="/Articles" />
                        <Article path="/articles/:article_id" />
                        <Articles path="topics/:topic" />
                        <Articles path="authors/:author" />
                        <ArticleComments path="articles/:article_id/comments" />
                        <Home path="Log_in_toContinue"/>
                    </Router>
                    <header className="Footer"> Footer </header>
                </div>
            );
        } 
        


    // componentDidMount() {
    //     Header.onClick() 
    // }
}
export default App;


