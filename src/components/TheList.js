import React from "react";

export default function TheList(props) {
    const {item, onToggleDone, onDeleteBtn} = props;
    
    return (
        <tr>
            <td>{item.task}</td>
            <td>
                <input type="checkbox"
                onChange={() => onToggleDone(item)}
                 />
            </td>
            <td className="text-center"><button className="btn btn-secondary m-2" onClick={() => onDeleteBtn(item)}>Delete</button></td>
        </tr>
    )

};