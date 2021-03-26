import React from "react";
import Classes from './MyPosts.module.css'

const MyPosts = () => {
	return (
		<div className={Classes.posts}>
			My posts
			<form action="" className={Classes.form}>
				<textarea name="textNewPost"></textarea>
				<input type="submit" value='Отправить' />
			</form>
			<Post last={true} likeCount={5} />
			<Post last={false} likeCount={6} />
			<Post last={false} likeCount={15} />
			<Post last={false} likeCount={8} />
		</div>
	);
}

const Post = (props) => {
	if (props.last) {
		return (
			<div className={Classes.post}>
				<img className={Classes.avatar} src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
				<span>Last post </span>
				<span>Likes: {props.likeCount}</span>
			</div>
		);
	}
	return (
		<div className={Classes.post}>
			<img className={Classes.avatar} src="https://images.pexels.com/photos/510469/pexels-photo-510469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<span>Post </span>
			<span>Likes: {props.likeCount}</span>
		</div>
	);
}


export default MyPosts;