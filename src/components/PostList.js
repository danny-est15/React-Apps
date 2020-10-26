import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() { // its basically the intial api request for the posts and the users or authors
        this.props.fetchPostsAndUsers();
        
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }
    //passing in the userId in as a prop for userHeader
    

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => { // takes in state from the main repostory 
    return { posts: state.posts}; // posts is the postsReducer which will return just the action payload
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);