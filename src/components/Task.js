import { FaTimes, FaCheck } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task 
    ${task.complete ? 'completed' : ''}`}
    onDoubleClick={() => onToggle(task.id)}
    >
     <h3 data-testid="task">{task.text} 
     <FaCheck className='check-mark'
     onClick={() => onToggle(task.id)} 
      />
     <FaTimes className='times' style={{ 
      color: 'red'}} 
      onClick={() => onDelete(task.id)}
      />
      </h3>
    </div>
  )
}

export default Task