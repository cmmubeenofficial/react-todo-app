import React, { useEffect, useRef, useState } from 'react'
import useTodoContext from '../contexts/TodoContext'

function TodoForm() {
    const { userText, handleAddTask } = useTodoContext()
    
    return (
        <>
            {/* Header */}
            <h1 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-md">Todo App</h1>

            {/* Add Task Form */}
            <form className="flex gap-2 mb-2 max-[390px]:flex-col max-[390px]:gap-0 max-[390px]:mb-2">
                <input
                    ref={userText}
                    type="text"
                    placeholder="Add a new task..."
                    className="flex-1 p-3 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 max-[390px]:w-full"
                />
                <button
                    onClick={handleAddTask}
                    type="submit"
                    className="bg-yellow-400 text-gray-800 font-semibold px-4 py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-lg transform transition-all duration-300 flex items-center gap-2 max-[390px]:w-full max-[390px]:mt-2 justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm