import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchArticles } from "./api";
import "../App.css";

class TopArticlesTable extends Component {
    state = { articles: [], sort_by: "votes" };
    render = () => {
        let articles = this.state.articles;
        return (
            <wrap className="tableWrap">
                <header>Top Articles By Vote</header>
                <table className="Top-Articles-Table">
                    <tbody>
                        <tr>
                            <td className="Article-Table-Header">
                                Article Title
                            </td>
                            <td className="Article-Table-Header">
                                Article Topic
                            </td>
                            <td className="Article-Table-Header">Author </td>
                        </tr>
                        {articles.map((article, rank) => {
                            return (
                                <tr>
                                    <td className="Article-Table-Element">
                                        {rank + 1}
                                    </td>
                                    <td className="Article-Table-Element">
                                        {article.title}
                                    </td>
                                    <td className="Article-Table-Element">
                                        {article.topic}
                                    </td>
                                    <td className="Article-Table-Element">
                                        {article.author}
                                    </td>
                                    <td className="Article-Table-Element">
                                        <header>Votes {article.votes}</header>
                                    </td>
                                    <td className="Article-Table-Element">
                                        <Link
                                            to={`/articles/${
                                                article.article_id
                                            }`}
                                            id={article.article_id}
                                        >
                                            Go to Article
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </wrap>
        );
    };
  

    componentDidMount() {
        fetchArticles({sort_by: "votes"}).then(articles => {
            const artsArr = articles.data.articles;
            this.setState({ articles: artsArr });
        });
    }
}

export default TopArticlesTable;