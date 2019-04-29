import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchArticleById, incVotesByArticle } from "./api";

class Articles extends Component {
    state = { article: [{}], voted: "" };
    render = () => {
        let article = this.state.article[0];
        let voteInc = this.voteInc;
        let voteDec = this.voteDec;
        return (
            <div className="Main-Article-Window">
                <header className="Main-Article-Title">
                    Article Name {article.title}
                </header>
                <header className="Main-Article-Body">{article.body}</header>
                <header className="Main-Article-Author">
                    Written by {article.author}
                </header>
                <div>
                    <Link to={`/Articles`}>Return to all articles</Link>
                    <header>Votes: {article.votes} </header>
                    <button onClick={voteInc}>+</button>
                    <button onClick={voteDec}>-</button>
                    <header>Comments: {article.comment_count} </header>
                    <button>Add Comment</button>
                    <Link
                        to={`/articles/${article.article_id}/comments`}
                        id={article.article_id}
                    >
                        See Article Comments
                    </Link>
                </div>
            </div>
        );
    };
    voteInc = () => {
        console.log(this.props.article_id);
        console.log("Voted Up");
        if (!(this.state.voted === "up")) {
            incVotesByArticle(this.props.article_id, "up");
            this.setState({ ...this.state, voted: "up" });
        }
        if (this.state.voted === "") {
            this.setState({ ...this.state, voted: "up" });
        }
        if (this.state.voted === "down") {
            this.setState({ ...this.state, voted: "" });
        }
    };
    voteDec = () => {
        if (!(this.state.voted === "down")) {
            incVotesByArticle(this.props.article_id);
            if (this.state.voted === "") {
                this.setState({ ...this.state, voted: "down" });
            }
            if (this.state.voted === "up") {
                this.setState({ ...this.state, voted: "" });
            }
        }
    };

    componentDidMount() {
        fetchArticleById(this.props.article_id).then(article => {
            const artsArr = article.data.article_id;

            this.setState({ article: artsArr });
        });
    }
    componentDidUpdate() {
        fetchArticleById(this.props.article_id).then(article => {
            const artsArr = article.data.article_id;

            this.setState({ article: artsArr });
        });
    }
}

export default Articles;
