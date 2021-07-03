import React, { useState } from 'react'
import { useTodoAppContext } from '../context/TodoAppContext'
import { addTodoItem } from '../functions/todoFunctions'
import { ItodoDataType } from '../states/todoState'

const AddEmployeeForm = () => {
    const {todoDispatch} = useTodoAppContext()
    const [title, setTitle] = useState<ItodoDataType['title']>("")
    
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value)

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!title) return 
        const id = parseInt(Math.random().toFixed(3).split('.').join().replace(',',''))
        const todoItem: ItodoDataType = {id,title,isCompleted: false}
        addTodoItem(todoDispatch,todoItem)
        setTitle("")
    }
    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <input id="title" type="text" value={title} onChange={handleTitle} placeholder="Enter todo title" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddEmployeeForm
