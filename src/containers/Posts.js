import React, { Fragment } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { POST_LIST } from '../actions';

class Posts extends React.Component {

    componentDidMount(){
        this.fetchPosts();
    }

    fetchPosts = () => {
        console.log('fetchPosts===>',this.props.posts);
        if(isEmpty(this.props.posts)) {
            axios({
                method:'GET',
                url:'https://jsonplaceholder.typicode.com/posts'
            })
            .then(resp=>{
                this.props.postList(resp.data);
            })
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <h2>Posts</h2>
                </div>
                <div>
                    <PostList />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      posts : state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postList: (posts) => dispatch({type: POST_LIST, payload:posts})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
