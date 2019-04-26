import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {fetchArticleById} from './api';

class Articles extends Component {
    state = { article: [{}]}
    render = ()=>{
        let article =this.state.article[0]
    return (
        <div className="Main-Article-Window">
             <header className='Main-Article-Title'>Article Name {article.title}</header>
             <header className='Main-Article-Body'>{article.body}</header>
             <header className='Main-Article-Author'>Written by {article.author}</header>
             <Link to={`/articles/${article.article_id}/comments`} id={article.article_id}>See Article Comments</Link>
        </div>
    );
    }
    
    componentDidMount() {

        
        fetchArticleById(this.props.article_id).then(article => {
            
            const artsArr = article.data.article_id
           
            this.setState({article:artsArr});
        });
    }
}

export default Articles;