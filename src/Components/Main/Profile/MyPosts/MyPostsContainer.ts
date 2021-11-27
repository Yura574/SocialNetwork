import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, PostElementType} from "../../../../Redux/profile_reducer";
import {StateType} from "../../../../Redux/Redux-store";
import {Dispatch} from "redux";

type MapStateToProps = {
    postData: Array<PostElementType>
}
type MapDispatchToProps = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        postData: state.profilePage.postData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPost2: string) => {
            dispatch(addPostAC(newPost2))
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostContainer


