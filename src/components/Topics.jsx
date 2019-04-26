import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {fetchTopics} from './api';
class Topics extends Component {
   state = {topics:[]};
    render() {
    let topics = this.state.topics
    return (
        <div className="Main-Window">
             <table className="Article-Table">
                    <tbody>
                        {topics.map(topic => {
                            return (
                                <tr >
                                    <td className="Article-Table-Element">
                                        {topic.slug}
                                    </td>
                                    <td className="Article-Table-Element">
                                        <Link to={`/topics/${topic.slug}`} slug={topic.slug}>Go to Articles on this Topic</Link>
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
        fetchTopics().then(Topics => {
            const topArr = Topics.data.topics
            this.setState({topics:topArr});
        });
    }

}

export default Topics;