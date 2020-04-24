import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                        <div className="card-content">
                            <Link to={`/${post.id}`}>
                                <span className="card-title"> {post.title} </span>
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
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
};

export default Home;