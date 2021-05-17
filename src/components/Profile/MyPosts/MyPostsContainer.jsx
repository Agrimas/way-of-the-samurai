import React from "react";
import {addPost} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
    };
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;