import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={Classes.posts}>
			My posts
			<Post last={true} likeCount={5}/>
			<Post last={false} likeCount={6}/>
			<Post last={false} likeCount={15}/>
			<Post last={false} likeCount={8}/>
		</div>
	);
}

export default MyPosts;