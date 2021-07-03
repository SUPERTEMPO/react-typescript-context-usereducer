import React, { FormEvent, useRef } from 'react'
import { useTodoAppContext } from '../context/TodoAppContext'
import { deleteTodoItem, toggleAllTodoItems, updateTodoItem } from '../functions/todoFunctions'

// {data}:IDataProps
const TableComponent = ():JSX.Element => {
    const {todoState:{todoData},todoDispatch} = useTodoAppContext()
    const isDone = useRef(false)
    const handleDelete = (e: FormEvent<HTMLButtonElement>,id: number):void =>{
        e.preventDefault()
        deleteTodoItem(todoDispatch,id)
    }
    const handleUpdate = (e: FormEvent<HTMLButtonElement>,id: number):void =>{
        e.preventDefault()
        updateTodoItem(todoDispatch,id)
    }
    const handleToggle = (e: FormEvent<HTMLButtonElement>):void =>{
        e.preventDefault()
        toggleAllTodoItems(todoDispatch, isDone.current)
        isDone.current = !isDone.current
    }
    return (
        <div>
            <table>
                <caption>My Todo List</caption>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoData.map(d => (
                        <tr key={d.id} className={d.isCompleted ? 'strikethrough':undefined}>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.isCompleted ? "Yes" : "No"}</td>
                            <td>
                                <div>
                                    <button title={d.isCompleted ? "Mark as not completed": "Mark as completed"} onClick={(e) => handleUpdate(e,d.id)}>Toggle</button>
                                    <button title="Delete Item" className="btn-danger" onClick={(e) => handleDelete(e,d.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={!isDone.current ? "btn-danger" : undefined } onClick={e => handleToggle(e)}>Toggle all as {isDone.current ? "completed": "uncompleted"}</button>            
        </div>
    )
}

export default TableComponent
