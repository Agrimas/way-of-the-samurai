import React from "react";
import Classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {useFormik} from "formik";

const MyPosts = (props) => {
    let PostElements = props.PostData.map(post => <Post key={post.id} id={post.id} likeCount={post.likeCount}
                                                        text={post.text}/>);

    const formik = useFormik({
        initialValues: {
            textarea: '',
        },
        onSubmit(values) {
            props.addPost(values.textarea);
            formik.resetForm();
        }
    })

    return (
        <div className={Classes.posts}>
            My posts
            <form onSubmit={formik.handleSubmit} className={Classes.form}>
                <textarea
                    id="textarea"
                    name="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.textarea}
                />
                <button type="submit">
                    Отправить
                </button>
            </form>
            {PostElements}
        </div>
    );
}

export default MyPosts;