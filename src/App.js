import React, {useState} from "react";
import Navbar from './components/Navbar.js'
import TheList from "./components/TheList.js";

function App() {
const [userName, setUserName] = useState('Andrew');
const [list, setList] = useState([{task: "Dishes", done:false}, {task: "Laundry", done:false}, {task: "Change Brakes", done:false}]);
const [newTodo, setNewTodo] = useState("");


//reates rows for list
const createRow = () => (
  list.map((item) => <TheList key={item.task} item={item} onToggleDone={handleToggleDone} onDeleteBtn={handleDeleteBtn}/>)
)
//saves task input into newTodo state
 const handleInputChange = (event) => {
    setNewTodo(event.target.value)
 }
 //handles saving new task to list
 const handleAddBtn = () => {
  
  if(newTodo === "") {
    alert("PLEASE ADD TASK")
    return false
  }
  for(let i = 0; i < list.length; i++) {
    if(list[i].task === newTodo) {
      alert("TASK ALREADY ADDED")
      return false
    }
  }
    setList([
      ...list, {task: newTodo, done:false}
    ])
    document.querySelector('.input').value = '';
    setNewTodo('')
 }

 const handleDeleteBtn = (todo) => {
  for(let i = 0; i < list.length; i++) {
    if(list[i].task === todo.task) {
      let items = [...list];
      let item = items[i];
      let newArr = list.filter(task => task !== item)
      setList(newArr)
    }
  }
 }

 console.log(list)
// handles changing state of done from ture to false
  const handleToggleDone = (todo) => {
     for(let i = 0; i < list.length; i++) {
      if(list[i].task === todo.task) {
        let items = [...list];
        let item = items[i];
        item.done = !item.done;
        setList(items)
      }
     }
  }
 
  return (
    <div className="App">
      <div className="row m-2">
        <Navbar name={userName}></Navbar>
        <div className="col-12">
        <input className="input" type='text' onChange={handleInputChange}/>
        <button className="btn btn-primary m-2" onClick={handleAddBtn}>Add</button>
          <table className="table">
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Complete</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
              <tbody>
               {createRow()}
              </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;


/// if completed for 10sec auto moves to a completed array