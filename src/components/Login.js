import React from "react";

export default function Login(props) {
    const {onUserUpdate, onLogin} = props;
    return (
        <div className="row p-2">
            <div className="col-4">
                <h3>Enter Name</h3>
                <input type='text' onChange={onUserUpdate} />
                <button className="btn btn-primary m-2" onClick={onLogin} >Submit</button>
            </div>
        </div>
    )
}