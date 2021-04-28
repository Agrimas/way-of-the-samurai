import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post likeCount={post.likeCount} text={post.text}/>)

    let newPostElement = React.createRef();

    return (
        <div className={Classes.posts}>
            My posts
            <form className={Classes.form}>
                <textarea ref={newPostElement} name="textNewPost"/>
                <input onClick={props.addPost} type="submit" value='Отправить'/>
            </form>
            {PostElements}
        </div>
    );
}

export default MyPosts;