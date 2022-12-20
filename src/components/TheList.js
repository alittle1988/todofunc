import React from "react";

export default function TheList(props) {
    const {item, onToggleDone} = props;
    
    
    
    return (
        <tr>
            <td>{item.task}</td>
            <td>
                <input type="checkbox"
                onChange={() => onToggleDone(item)} />
            </td>
        </tr>
    )

};