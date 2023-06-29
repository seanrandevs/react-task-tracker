import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("TASKS")) || [])

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
    // const getTasks = async () => {
    //   const tasksFromServer = await fetchTasks()
    //   setTasks(tasksFromServer)
    // }
    // getTasks()
  }, [tasks])

   // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Add Task
  const addTask = async (task) => {
    // const res = await fetch('http://localhost:5000/tasks', {
    //   method: 'POST', 
    //   headers: {
    //     'Content-type' : 'application/json',
    //   },
    //   body: JSON.stringify(task)
    // })
    // const data = await res.json()

    // setTasks([...tasks], data)

    const id = v4();
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // const deleteTask = async (id) => {
  //    await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'DELETE'
  //    })

  //    setTasks(tasks.filter((task) => task.id !== id))
  // }

  // Toggle Reminder
  const toggleComplete = async (id) => {
    // const taskToToggle = await fetchTask(id)
    // const updTask = { ...taskToToggle, 
    //   complete: !taskToToggle.complete}
    //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //     method: 'Put', 
    //     headers: {
    //       'Content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(updTask)
    //   })

    //   const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ?
    { ...task, complete: !task.complete} : task))
  }
  console.log(tasks)

  return (

    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? ( 
      <Tasks taskItem={tasks} 
      onDelete={deleteTask}
      onToggle={toggleComplete}
      />)
      : ( <div data-testid="no-task">No Task To Show</div> )}
    </div>
  );
}

export default App;
