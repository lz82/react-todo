import * as ActionTypes from './action-types'

// 创建todo item input change 的action
export const CreateTodoitemInputChangeAction = val => ({
  type: ActionTypes.TodoItemInputChange,
  payload: {
    val
  }
})

// todolist add
export const CreateTodoItemListAddAction = () => ({
  type: ActionTypes.TodoItemListAdd
})

export const CreateTodoItemListDelAction = index => ({
  type: ActionTypes.TodoItemListDel,
  payload: {
    index
  }
})