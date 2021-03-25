import React from "react";
import Classes from './Post.module.css'

const Post = (props) => {

	if (props.last) {
		return (
			<div className={Classes.item}>
				<img className={Classes.avatar} src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
				<span>Last post </span>
				<span>Likes: {props.likeCount}</span>
			</div>
		);
	}
	return (
		<div className={Classes.item}>
			<img className={Classes.avatar} src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<span>Post </span>
			<span>Likes: {props.likeCount}</span>
		</div>
	);
}

export default Post;