import React from 'react'

export default function DataLoop ({ todo, checkBox }) {
    function changeCheckBox() {
        checkBox(todo.id)
    }

  return (
    <div className="flex-column">
        <label className='flex-row'>
        <input type="checkbox" checked = {todo.isComplete} onChange= {changeCheckBox} />
        { todo.name }
        {/* { todo.id } */} {/* this will show us the id of our task we created */}
        </label>
    </div>
   
    )
  
}


// This helps us loop over our data