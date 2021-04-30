import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post likeCount={post.likeCount} text={post.text}/>)

    let onChangeHandler = (e) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    debugger
    return (
        <div className={Classes.posts}>
            My posts
            <form className={Classes.form}>
                <textarea value={props.valueTextarea} onChange={onChangeHandler}/>
                <input onClick={props.addPost} type="button" value='Отправить'/>
            </form>
            {PostElements}
        </div>
    );
}

export default MyPosts;