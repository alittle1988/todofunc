import React from "react";

export default function Navbar(props)  {
    const  {name} = props;
    return (
     <div>
        <h1 className="text-center bg-primary">{name}'s Todo List</h1>
     </div>
    )
};