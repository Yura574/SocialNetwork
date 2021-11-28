import React from "react";
import {Post} from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostElementType} from "../../../../Redux/profile_reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {fieldsValidator, maxLengthCreator} from "../../../../validators/validators";
import {Element} from "../../../../common/FormControls/FormControls";


type MyPostsType = {
    postData: Array<PostElementType>
    addPost: (newPost: string) => void
}
type NewPostForm = {
    newPost: string
}

export function MyPosts(props: MyPostsType) {
    const onSubmit = (values: any) => {
        props.addPost(values.newPost)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.postsWrapper}>
               <div>
                   <NewPostReduxForm onSubmit={onSubmit}/>
               </div>
                <div>
                    <div>{props.postData.map(p =>
                        <Post key={p.id}
                            message={p.message}
                            like={p.like}/>)}</div>
                </div>
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)
const Input = Element("input")

const NewPost = (props: InjectedFormProps<NewPostForm>)=> {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                   validate={[fieldsValidator, maxLength30]}  name={'newPost'}/>
            <div>
                <button > add</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm<NewPostForm>({form: 'newPost'})(NewPost)