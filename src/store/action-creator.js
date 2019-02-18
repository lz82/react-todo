import axios from 'axios'

import * as ActionTypes from './action-types'

export const GreateGetInitTodoItem = () => {
  return async dispatch => {
    const { status, data } = await axios.get('https://api.github.com/users/lz82')
    if (status === 200) {      
      const list = [
        data.name
      ]
      const action = CreateInitTodoItemList(list)
      dispatch(action)
    }
  }  
}

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