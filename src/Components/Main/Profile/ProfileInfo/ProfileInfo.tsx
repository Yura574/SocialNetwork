import React from "react";
import classes from "./ProfileInfo.module.css";

type DescriptionType = {}

export function ProfileInfo(props: DescriptionType) {
    return (
        <div>
            <div>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
                    alt="img" className={classes.image}/>
            </div>
            <div className={classes.description}>Ava+description</div>
        </div>
    )
}