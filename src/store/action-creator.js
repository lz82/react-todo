import * as ActionTypes from './action-types'

export const CreateInitTodoItemList = list => {
  return {
    type: ActionTypes.InitTodoItemList,
    value: list
  }
}

export const CreateUpdateTodoItemAction = val => {
  return {
    type: ActionTypes.UpdateTodoItemValue,
    value: val
  }
}

export const CreateAddTodoItemList = () => {
  return {
    type: ActionTypes.InsertTodoItemList
  }
}

export const CreateDeleteTodoItemList = index => {
  return {
    type: ActionTypes.DeleteTodoItemList,
    index
  }
}