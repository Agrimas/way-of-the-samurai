import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post likeCount={post.likeCount} text={post.text}/>)

    let onChangeHandler = (e) => {
        props.dispatch(updateNewPostText(e.currentTarget.value));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={Classes.posts}>
            My posts
            <form className={Classes.form}>
                <textarea value={props.valueTextarea} onChange={onChangeHandler}/>
                <input onClick={addPost} type="button" value='Отправить'/>
            </form>
            {PostElements}
        </div>
    );
}

export default MyPosts;