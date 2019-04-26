import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchArticles } from "./api";

class Articles extends Component {
    state = { articles: [] };
    render = () => {
        let articles = this.state.articles;
        return (
            <div className="Main-Window">
                <select onChange={this.handleSort}>
                    <option defaultValue>Sort Articles</option>
                    <option value="title">Sort Title</option>
                    <option value="author">Sort by Author </option>
                    <option value="votes">Sort by Votes </option>
                    <option value="comment_count">Sort by comments </option>
                </select>
                <table className="Article-Table">
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
                        {articles.map(article => {
                            return (
                                <tr>
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
                                        <header>
                                            Comments {article.comment_count}
                                        </header>
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
            </div>
        );
    };

    handleSort = event => {
        // this.props.sort_by=event.target.value
        this.props = { sort_by: event.target.value, ...this.props };
        fetchArticles(this.props).then(articles => {
            console.log(this.props.sort_by, "<<<<");
            const artArr = articles.data.articles;
            this.setState({ articles: artArr });
        });
    };

    componentDidMount() {
        fetchArticles(this.props).then(articles => {
            const artsArr = articles.data.articles;
            this.setState({ articles: artsArr });
        });
    }
}

export default Articles;
