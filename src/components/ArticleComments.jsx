import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { fetchCommentsByArticle, fetchArticleById, incVotesByComment } from "./api";
import "../App.css"

class ArticleComments extends Component {
    state = {
        article: "",
        comments: [],
        article_id : 0
    };
    render = () => {
        let article = this.state.article;
        let comments = this.state.comments;
        let article_id=this.state.article_id
        return (
            <div>
                <header>Comments on Article: {article} </header>
                <table className="Article-Table">
                    <tbody>
                        <tr>
                            <td className="Article-Table-Header">Comments</td>
                            <td className="Article-Table-Header">Author</td>
                            <td className="Article-Table-Header">
                                {" "}
                                Comment Votes{" "}
                            </td>
                            <td className="Article-Table-Header">
                                Vote!!!
                            </td>
                        </tr>
                        {comments.map(comment => {
                            return (
                                <tr>
                                    <td className="Article-Table-Element">
                                        {comment.body}
                                    </td>
                                    <td className="Article-Table-Element">
                                        {comment.author}
                                    </td>
                                    <td className="Article-Table-Element">
                                        {comment.votes}
                                    </td>
                                    <td>
                                    <button id={comment.comment_id} onClick={incVotesByComment}>+</button>
                                    <button id={comment.comment_id} onClick={incVotesByComment}>-</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button> Push to add your Comment </button>{" "}
                <br></br>
                <textarea placeholder="Add your Comment" className="Comment-Box"/>
                <br>
                </br>
                <Link to={`/articles/${article_id}`} >Return to Article</Link>
            </div>
        );
    };

    componentDidMount() {
        fetchArticleById(this.props.article_id).then(article => {
            this.setState({
                article: article.data.article_id[0].title,
                article_id: article.data.article_id[0].article_id
            });
        });
        fetchCommentsByArticle(this.props.article_id).then(comments => {
            const commentsArr = comments.data.comments;
            this.setState({ comments: commentsArr, ...this.setState });
        });
    }
}
export default ArticleComments;
