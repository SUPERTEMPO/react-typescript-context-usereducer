import { ActionType } from "../actions/todoActions";
import data from "../data/todoData";

export type DispatchAction = React.Dispatch<ActionType>

export interface ReturnType {
    message: string,
    error: boolean
}

export interface ItodoDataType{
    readonly id: number,
    readonly title: string,
    readonly isCompleted: boolean
}

export interface TodoAppInterface{
    todoData: ItodoDataType[],
    totalTodos: number
}

export const todoInitialState: TodoAppInterface = {
    todoData: data,
    totalTodos: 0
}