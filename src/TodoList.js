import React from 'react';
import DataLoop from "./DataLoop"

export const TodoList = ({ todos , checkBox }) => {
  return (
    todos.map( todo => {
        return <DataLoop key = {todo.id} checkBox = {checkBox} todo = {todo} /> //This are called 'Props' amd thats how we are passing
                                                    // the information from file to file and function or method to another,
                                                    //and in this case to the DataLoop.js level

    })
  )
}



// Here is where our TODO list lives