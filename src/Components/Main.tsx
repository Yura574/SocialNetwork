import React from "react";
import classes from './Main.module.css';


export function Main() {
    return (

        <main className={classes.main}>
            <div>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
                    alt="img"/>
            </div>
            <div>Ava+description</div>
            <div>New post</div>
            <div>My post</div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </main>
    )
}