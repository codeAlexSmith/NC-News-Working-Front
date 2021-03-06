import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchArticles } from "./api";
import '../App.css';

class Articles extends Component {
    state = { articles: [] };
    render = () => {
        let articles = this.state.articles;
        return (
            <div className="Main-Window">
               <wrap className='tableWrap'>
                <select onChange={this.handleSort}>
                    <option defaultValue>Sort Articles</option>
                    <option value="title">Sort Title</option>
                    <option value="author">Sort by Author </option>
                    <option value="votes">Sort by Votes </option>
                    <option value="comment_count">Sort by comments </option>
                </select>

                <select onChange={this.handleOrder}>
                    <option defaultValue value='desc'>Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <table className = 'Article-Table'>
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
                                <tr className= 'Article-Table-Row'>
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
                        </wrap>
            </div>
        );
    };
    handleOrder = event => {
        this.props={...this.props, order:event.target.value}
        fetchArticles(this.props).then(articles => {
            console.log(this.props.sort_by, "<<<<");
            const artArr = articles.data.articles;
            this.setState({ articles: artArr });
        });
    }

    handleSort = event => {
        // this.props.sort_by=event.target.value
        this.props={...this.props, sort_by:event.target.value}
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
