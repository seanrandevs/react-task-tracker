import { FaTimes, FaCheck } from 'react-icons/fa'

const TaskDiv = ({ task, onDelete, onToggle }) => {
  return (
    <li 
    className={`task
    ${task.complete ? 'completed' : ''}`}
    onDoubleClick={() => onToggle(task.id)}
    >
     <h3>{task.text} 
     <FaCheck 
     className='check-mark'
     data-testid="complete-btn"
     onClick={() => onToggle(task.id)} 
      />
     <FaTimes 
      data-testid="delete-btn"
     className='times' style={{ 
      color: 'red'}} 
      onClick={() => onDelete(task.id)}
      />
      </h3>
    </li>
  )
}

export default TaskDiv