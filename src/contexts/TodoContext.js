import { createContext, useContext } from "react";

// context creation
export const TodoContext = createContext({
    userText: "",
    userTasks: "",
    setUserTasks: "",
    saveTaskToLS: () => { },
    handleAddTask: () => { },
})

// context provider
export const TodoContextProvider = TodoContext.Provider

// hook to useContext
export default function useTodoContext() {
    return useContext(TodoContext)
}