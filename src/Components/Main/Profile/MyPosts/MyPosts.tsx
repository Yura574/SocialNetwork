import React, {ChangeEvent} from "react";
import {Post} from "../Post/Post";
import classes from "./MyPosts.module.css";
import {ProfileStatePropsType} from "./MyPostsContainer";
import {Formik} from "formik";
import SuperInputText from "../../../../CommonComponents/c1-SuperInputText/SuperInputText";


export function MyPosts(props: ProfileStatePropsType) {


    function addPost(postText: string) {
        props.addPost(postText)
    }

    // function newPostText(e: ChangeEvent<HTMLTextAreaElement>) {
    //     const newText = e.currentTarget.value
    //     props.updateNewPostText(newText)
    // }
    const validateError = (values: { postText: string }) => {
        const errors: { postText?: string } = {}
        if(!values.postText) {
            errors.postText = 'text is required'
        }
        return errors
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>
                <Formik
                    initialValues={{postText: ''}}
                    validate={validateError}
                    onSubmit={(values) =>addPost(values.postText)}>
                    {({values, handleChange, handleSubmit, errors}) => (
                        <form onSubmit={handleSubmit}>
                            <SuperInputText
                                value={values.postText}
                                onChange={handleChange}
                            name='postText'/>
                            {errors.postText && errors.postText}
                            <div>
                                <button> add</button>
                            </div>
                        </form>
                    )}
                </Formik>
                {/*<textarea onChange={newPostText} value={props.newPostText}/>*/}

            </div>

            <div>

                {props.postData.map(p => <Post key={p.id} message={p.message} like={p.like}/>)}

            </div>
        </div>
    )
}