import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchArticles } from "./api";
import TopArticlesTable from './TopArticlesTable'
import MostDiscussedTable from './MostDiscussedTable'
import "../App.css";
function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Topics">Topics</Link>
            <br />
            <Link to="/Articles">Articles</Link>
            <br />
            <Link to="/Authors">Authors</Link>
        </nav>
    );
}

class SideBar extends Component {
    state = { articles: [], sort_by: "votes" };
    render = () => {
        let articles = this.state.articles;
        return (
            <div className="Sidebar">
                <header className="Navigation-Title">Navigation Menu</header>
                <Nav className="links" />
                <TopArticlesTable></TopArticlesTable>
                <MostDiscussedTable></MostDiscussedTable>
                <table className="Trending-Authors-Table">
                    <tbody>
                        <tr>
                            <td />
                            {"Trending Authors"}
                        </tr>
                        <tr>
                            <td>1</td>
                            <td />
                            {"Alex"}
                        </tr>
                        <tr>
                            <td>2</td>
                            <td />
                            {"Also Alex"}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default SideBar;
