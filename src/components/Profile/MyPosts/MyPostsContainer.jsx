import React from "react";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        valueTextarea: state.profilePage.value,
        PostData: state.profilePage.PostData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostActionCreator())
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;