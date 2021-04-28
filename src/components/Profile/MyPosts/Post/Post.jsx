import React from "react";
import Classes from "./Post.module.css";

function Post(props) {
    return (
        <div className={Classes.post}>
            <div>
                <img className={Classes.avatar}
                     src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt=""/>
                <span>Likes: {props.likeCount}</span>
            </div>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;