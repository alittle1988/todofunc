import React from "react";

export default function CompletedList(props) {
    const {completed} = props
    const createTd = () => (
        completed.map((item) => <tr key={item.task}><td>{item.task}</td></tr>)
    )
    
    return (<>
    <div className="col-4">
        <table className="table">
            <thead>
                <tr>
                    <th>Completed Task</th>
                </tr>
            </thead>
            <tbody>
              {createTd()}
                
            </tbody>
        </table>
        <button className="btn btn-success" onClick={props.onCompletedBtn}>Unsee Completed</button>
    </div>
        </>)
}