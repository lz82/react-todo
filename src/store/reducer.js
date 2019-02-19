import * as ActionTypes from './action-types'

const defaultState = {
  todoItem: '',
  todoList: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === ActionTypes.TodoItemInputChange) {
    newState.todoItem = action.payload.val

    return newState
  }

  if (action.type === ActionTypes.TodoItemListAdd) {
    newState.todoList.push(newState.todoItem)
    newState.todoItem = ''

    return newState
  }

  if (action.type === ActionTypes.TodoItemListDel) {
    newState.todoList.splice(action.payload.index, 1)

    return newState
  }

  return state
}