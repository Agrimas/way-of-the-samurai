import React from "react";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {(store) => {

            let PostData = store.getState().profilePage.PostData;
            let valueTextarea = store.getState().profilePage.value;

            let updateNewPostText = (text) => {
                store.dispatch(updateNewPostTextAC(text));
            }

            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }


            return (<MyPosts updateNewPostText={updateNewPostText} addPost={addPost} PostData={PostData}
                             valueTextarea={valueTextarea}/>);
        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer;