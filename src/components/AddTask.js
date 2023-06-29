import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [complete, setComplete] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Check to see if theres any text
    if(!text) {
      alert('Please add a task')
      return
    }
    // If there is a text then run this function
    onAdd({ text, complete })
    // Reset the values in the inputs
    setText('')
    setComplete(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
       <div className="form-control">
         <label>Task</label>
         <input type="text" data-testid="task-input" placeholder="Add Task" 
         value={text} 
         onChange={(e) => setText(e.target.value)}
         />
       </div>

       <input data-testid="add-btn" type="submit" value="Save Task"
       className="btn btn-block" />
    </form>
  )
}

export default AddTask