import React from "react";
import Classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return <>
		My posts
		<Post />
		<Post />
		<Post />
	</>
}

export default MyPosts;