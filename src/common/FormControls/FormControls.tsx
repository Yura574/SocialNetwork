import React from "react";
import classes from "./FormControls.module.css";


export const Element = (Element: string) => ({input, meta, ...props}: any) =>{
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? classes.error : ''}>
            <Element {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

//
// export const Textarea = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={hasError ? classes.error : ''}>
//             <div>
//                 <textarea {...input}{...props}/>
//             </div>
//             {
//                 hasError && <span>{meta.error} </span>
//             }
//         </div>
//     )
// }
// export const Input = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={hasError ? classes.error : ''}>
//             <div>
//                 <input {...input}{...props}/>
//             </div>
//             {
//                 hasError && <span>{meta.error} </span>
//             }
//         </div>
//     )
// }