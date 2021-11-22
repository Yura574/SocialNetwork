import React from "react";

type ProfileStatusType = {
    statusText: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () =>  {
        this.setState( {
            editMode: true
        })

    }
    deactivateEditMode = () =>  {
        this.setState( {
            editMode: false
        })

    }


    render() {

        return (
            <div>{!this.state.editMode
                ? <div><span onDoubleClick={ this.activateEditMode}>{this.props.statusText?this.props.statusText: "введите статус" }</span></div>
                : <div><input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.statusText}/></div>}
                {/*<div><span>{this.props.statusText}</span></div>*/}

            </div>
        )
    }
}