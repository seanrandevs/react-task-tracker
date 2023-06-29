import TaskDiv from "./TaskDiv"

const Tasks = ({ taskItem, onDelete, onToggle }) => {

  return (
    <>
     {taskItem.map((task) => (
     <TaskDiv 
     key={task.id} 
     task={task} 
     onDelete={onDelete}
     onToggle={onToggle}
     />
     ))}
    </>
  )
}

export default Tasks