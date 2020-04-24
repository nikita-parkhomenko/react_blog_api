import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import RunnerImage from '../../assets/runner.png'

class Home extends Component {

    state = {
        posts: [ ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => {
                console.log(resp)
                this.setState({
                    posts: resp.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;

        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div key={post.id} className="post card">
                        <img src={RunnerImage} alt="Running peoples" />
                        <div className="card-content">
                            <Link to={`/${post.id}`}>
                                <span className="card-title orange-text"> {post.title} </span>
                            </Link>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No Posts Yet! </div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
};

export default Home;