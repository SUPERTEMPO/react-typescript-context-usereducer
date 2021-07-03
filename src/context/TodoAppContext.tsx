import React, { createContext, useContext, useReducer } from 'react'
import { DispatchAction, TodoAppInterface, todoInitialState } from '../states/todoState'
import TodoAppReducer from '../reducer/TodoAppReducer'

export const TodoAppContext = createContext<{todoState: TodoAppInterface, todoDispatch: DispatchAction }>({todoState: todoInitialState,todoDispatch: () => undefined})

const TodoAppProvider = ({children}: any) => {
    const [todoState, todoDispatch] = useReducer(TodoAppReducer, todoInitialState)
    return (
        <TodoAppContext.Provider value={{todoState,todoDispatch}}>
            {children}
        </TodoAppContext.Provider> 
    )
}
/**
 * returns todoDispatch & the current state
 */
export const useTodoAppContext = () => useContext(TodoAppContext)

export default TodoAppProvider

