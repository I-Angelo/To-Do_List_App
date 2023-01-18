// import logo from './logo.svg'; Nor this
// import './App.css'; We dont need this either
import { TodoList } from './TodoList'
import React, {useState, useRef} from 'react' //useState is a hook to add a 'state variable'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  // const [todos] = useState([]);
  // const [setTodos] = useState([]);
  // or (same as above) below : (THESE ARE OUR TWO HOOKS BELOW useState AND useRef)
  
  const [todos, setTodos] = useState([]); //inside trhe prantheses of useState we had '[{name: 'eat breakfast', id: 0, isComplete: false}]' to test our app
                          //useState will allow us to set the data for our to-dos list, which in python is like making a list
                          //and append the new items. So here useState allows us to copy the data and modify it like adding or deleting items
                          //to our list. 

  const addRef = useRef() //'useRef allows us to use the data from the 'input section in line 49 anbd use it elsewhere in the app


  // FUNCTION THAT ADDS THE ITEMS TO OUR LIST OF TO-DOS

  function addTodo(event) {
    const taskName = addRef.current.value
    if (taskName) {
      setTodos(oldTodos => {
        return [...oldTodos, {id: uuidv4(), name: taskName, isComplete: false}] //The three dots '...' goes through the previous data and does nNOT modify it but
                                                    //rather uses a modified copy of the original data, and ADDS the new task in this case
      })
      // console.log(taskName); //This is used for testing on the 'console' in inspect
      addRef.current.value = null //This returns the input space to null
    } else {
      return null //If nothing is tyuped in then is 'null'
    }
  }

  //FUNCTION TO HANDLE THE CHECKBOXES

  function checkBox(id) {
    const newStuff = [...todos] //Again, three dots takes a copy of our 'old' list and give the data to 'newStuff'
    const todo = newStuff.find(specificItem => specificItem.id === id); //'find' is looking through our data for a specific item
    todo.isComplete = !todo.isComplete; //once the item has been found , it takes the current value's status of
                                  //isComplete (false or true) and makes it the opposite , hence the '!'
    setTodos(newStuff) //We made a copy of the oroginal list and set up a new list 
  }

// FUNCTION TO CLEAR THE CHECKED BOXES AND ITS ITEM FROM OUR LIST

  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.isComplete) //We are searchingfor the 'tasks' that are 'true' or checked
          // and filter them out and pass on to newTodos the remaining tasks that are still 'unchecked' or 'false' or unchecked
    setTodos(newTodos) //passing the remaining todos on to setTodos
  }

  return (
    <>
    <div className="flex-column margin-top"> {/*THIS IS JSX . in here in REact we need to us 'className' instead of only 'class' because this is not HTML*/}
      <TodoList todos ={todos} checkBox = {checkBox} /> {/* The first 'todos' is the name of our attribute name of our element also called 'Props'
                                  and the second 'todos' is coming from line 10
                                  line 14 is how we pass the information from here 'App.js' onto 'TodoList.js'*/}
      <input ref={ addRef } type = "text" />
      <div className="flex-row">
      <button className="padding-5 margin-5" onClick={ addTodo} >Add Item</button>
      <button className="padding-5 margin-5" onClick={clearTodos}>Clear All</button>
      </div>
      <div>Left To Do: {todos.length}</div> {/* 'length ' is native to javascript so we can use it to nknow the length of our list*/}
    </div>
    </>
    
    // <h3>
    // <div >
    //   Hello World
    // </div>
    // <div>
    //   What is up happy Friyayy
    // </div>
    // </h3>
  );
}

export default App;

// This does app logic lives 

// ypu hacve to install 'npm i uuid' to be able to add the 'id' to our tasks and import it as it is on line 5

