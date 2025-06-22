import React, { useEffect, useRef, useState } from 'react'
import useTodoContext from '../contexts/TodoContext'

function TodoItem() {
  const [editableTaskId, setEditableTaskId] = useState(null)
  const editAbleField = useRef("")


  const { userTasks, setUserTasks } = useTodoContext()

  // delete task
  const handleDelete = (selectedTaskId) => {
    const remainingTasks = userTasks.filter((currentTask) => currentTask.taskId !== selectedTaskId)
    setUserTasks(remainingTasks)
  }

  // toggle task completed or not
  const handleCheckToggle = (selectedTaskId) => {
    const updatedTasks = userTasks.map((currentTask) => {
      if (currentTask.taskId === selectedTaskId) {
        return { ...currentTask, isCompleted: !currentTask.isCompleted }
      }
      return currentTask;
    });
    setUserTasks(updatedTasks)
  }

  // function for edite task
  const handleEdite = (taskId) => {
    setEditableTaskId(taskId)
  }

  // function to update value
  const handleSave = (taskId) => {
    // save the updated task
    const updatedTasks = userTasks.map((task) => {
      if (task.taskId === taskId) {
        return { ...task, taskText: editAbleField.current.value }
      }
      return task
    })
    setUserTasks(updatedTasks)

    // render paragraph of updated task
    setEditableTaskId(false)
  }

  return (
    <>
      {/* Task List */}
      <ul className="space-y-2 sm:space-y-3">
        {/* Task Items */}
        {userTasks.map((task) => (
          <li key={task.taskId} className="flex items-center justify-between bg-white/40 rounded-lg p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 pr-2 sm:pr-3">
              <input
                checked={task.isCompleted}
                onChange={() => handleCheckToggle(task.taskId)}
                type="checkbox"
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 rounded focus:ring-green-400"
              />

              {/* render pargraph or input only */}
              {editableTaskId === task.taskId ? (
                <input
                  ref={editAbleField}
                  type="text"
                  defaultValue={task.taskText}
                  className={`${task.isCompleted ? "line-through" : ""} text-white w-full text-sm sm:text-base break-all bg-transparent border border-white/30 focus:outline-none focus:border-b-green-500 focus:border-b-2 cursor-text rounded-md p-[6px] sm:p-[2px] pl-2 sm:pl-2 transition-all duration-300 ease-in-out`}
                />
              ) : (
                <p className={`${task.isCompleted ? "line-through" : ""} text-white w-full text-sm sm:text-base break-words`}>
                  {task.taskText}
                </p>
              )}

            </div>
            <div className="flex gap-1 sm:gap-2">

              {/* edit or save button */}
              {editableTaskId === task.taskId ? (
                <button
                  onClick={() => handleSave(task.taskId)}
                  className="bg-green-500 text-white p-1.5 sm:p-2 rounded-md hover:bg-green-600 hover:scale-105 transform transition-all duration-300"
                  title="Save Task"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => handleEdite(task.taskId)}
                  className="bg-blue-500 text-white p-1.5 sm:p-2 rounded-md hover:bg-blue-600 hover:rotate-12 transform transition-all duration-300"
                  title="Edit Task"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
              )}
              {/* Delete button */}
              <button
                onClick={() => handleDelete(task.taskId)}
                className="bg-red-500 text-white p-1.5 sm:p-2 rounded-md hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
                title="Delete Task"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoItem