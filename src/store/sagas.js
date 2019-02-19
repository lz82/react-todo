import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import * as ActionTypes from './action-types'
import { CreateTodoItemInitDataAction } from './action-creator'


function* rootSaga () {
  yield takeEvery(ActionTypes.InitTodoItemFetch, fetchInitTodoItem)
}

function* fetchInitTodoItem () {
  try {
    const user = yield call(axios.get, 'https://api.github.com/users/lz82')
    console.log(user)
    yield put(CreateTodoItemInitDataAction(user.data.name))
  } catch (err){
    console.log(`fetch init todo item fail: ${err.toString()}`)
  }
}

export default rootSaga