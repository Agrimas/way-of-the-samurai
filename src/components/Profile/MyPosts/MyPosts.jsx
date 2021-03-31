import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post last={post.last} likeCount={post.likeCount}/>)
    return (
        <div className={Classes.posts}>
            My posts
            <form action="" className={Classes.form}>
                <textarea name="textNewPost"></textarea>
                <input type="submit" value='Отправить'/>
            </form>
            {PostElements}
        </div>
    );
}

export default MyPosts;