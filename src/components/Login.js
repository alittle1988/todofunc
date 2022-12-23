import React from "react";

export default function Login(props) {
    const {onUserUpdate, onLogin} = props;
    return (
        <div className="row p-2">
            <div className="col-12 text-center">
                <h1>Welcome To The Todo List</h1>
                <h3>Enter Name</h3>
                <input type='text' onChange={onUserUpdate} />
                <button className="btn btn-primary m-2" onClick={onLogin} >Submit</button>
            </div>
        </div>
    )
}