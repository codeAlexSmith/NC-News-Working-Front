import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {fetchAuthors} from "./api"
class Authors extends Component {
    state = {authors: []};
    render() {
        const authors = this.state.authors;
        return (
            <div className="Main-Window">
               <table className="Article-Table">
                    <tbody>
                        {authors.map(author => {
                            return (
                                <tr >
                                    <td className="Article-Table-Element">
                                        {author.username}
                                    </td>
                                    <td className="Article-Table-Element">
                                        <Link to={`/authors/${author.username}`} author={author.username}>Go to Articles on this Author</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidMount() {
        fetchAuthors().then(Authors => {
            const autArr = Authors.data.users
    
            this.setState({authors:autArr});
        });
    }
}

export default Authors;
