import * as ActionTypes from './action-types'

export const CreateGetInitTodoList = () => {
  return {
    type: ActionTypes.GetInitTodoListData
  }
}

export const CreateInitTodoItemList = list => {
  return {
    type: ActionTypes.InitTodoItemList,
    payload: {
      list
    }
  }
}

export const CreateUpdateTodoItemAction = val => {
  return {
    type: ActionTypes.UpdateTodoItemValue,
    payload: {
      val
    }
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
    payload: {
      index
    }
  }
}