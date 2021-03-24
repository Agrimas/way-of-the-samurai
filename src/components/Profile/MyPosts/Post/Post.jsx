import React from "react";
import Classes from './Post.module.css'

const Post = () => {
	return <div className={Classes.post}>
		<img src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
		New post
		<div>like</div>
	</div>
}

export default Post;