import { TodoActions } from "../actions/todoActions";
import { DispatchAction, ItodoDataType, ReturnType } from "../states/todoState";

export const addTodoItem = (dispatch: DispatchAction,body: ItodoDataType): ReturnType =>{
    try {
        dispatch({type: TodoActions.ADD,payload: body})
        return {message: "Todo Added Successfully",error: false}
    } catch (error) {
        return {message: `Sorry an error occurred ${error.message}`,error: false}
    }

}
export const deleteTodoItem = (dispatch: DispatchAction,id: number): ReturnType =>{
    try {
        dispatch({type: TodoActions.DELETE,payload: id})
        return {message: "Todo Deleted Successfully",error: false}
    } catch (error) {
        return {message: `Sorry an error occurred ${error.message}`,error: false}
    }

}
export const updateTodoItem = (dispatch: DispatchAction,id: number): ReturnType =>{
    try {
        dispatch({type: TodoActions.UPDATE,payload: id})
        return {message: "Todo Deleted Successfully",error: false}
    } catch (error) {
        return {message: `Sorry an error occurred ${error.message}`,error: false}
    }

}
export const toggleAllTodoItems = (dispatch: DispatchAction, done: boolean): ReturnType =>{
    try {
        dispatch({type: TodoActions.TOGGLE_ALL, payload: done})
        return {message: "Todo List Toggled Successfully",error: false}
    } catch (error) {
        return {message: `Sorry an error occurred ${error.message}`,error: false}
    }

}