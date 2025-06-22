import { useEffect, useRef, useState } from 'react'
import { TodoForm, TodoItem } from './components/componentsIndex.js'
import { TodoContextProvider } from './contexts/TodoContext.js'

function App() {

  const userText = useRef("")
    const [userTasks, setUserTasks] = useState(() => {
        const savedTasks = localStorage.getItem("todoTasks")
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    
    // save to LS
    const saveTaskToLS = (userTasksProp) => {
        localStorage.setItem("todoTasks", JSON.stringify(userTasksProp))
    }
    
    useEffect(() => {
        saveTaskToLS(userTasks)
    }, [userTasks])
    
    // add the task to array
    const handleAddTask = (e) => {
        e.preventDefault()
        const newTask = {
            taskId: Date.now(),
            taskText: userText.current.value,
            isCompleted: false
        }
        
        if (newTask.taskText.trim() == "") return
        
        setUserTasks((prev) => [...prev, newTask])
        
        userText.current.value = ""
    }

  return (
    <TodoContextProvider value={{ userText, userTasks, setUserTasks, saveTaskToLS, handleAddTask }}>
      <div className='bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center p-4'>
        <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
          <TodoForm />
          <TodoItem />
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
