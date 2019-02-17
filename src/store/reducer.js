import * as ActionTypes from './action-types'

const defaultState = {
  todoItem: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === ActionTypes.InitTodoItemList) {
    newState.list = action.value
    return newState
  }

  if (action.type === ActionTypes.UpdateTodoItemValue) {
    newState.todoItem = action.value
    return newState
  }

  if (action.type === ActionTypes.InsertTodoItemList) {
    newState.list.push(state.todoItem)
    newState.todoItem = ''
    return newState
  }

  if (action.type === ActionTypes.DeleteTodoItemList) {
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}