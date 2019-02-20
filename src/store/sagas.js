import { call, put,  takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import * as ActionTypes from './action-types'
import { CreateInitTodoItemList } from './action-creator'

function* initTodoItemList () {
  const { status, data } = yield call(axios.get, 'https://api.github.com/users/lz82')
  if (status === 200) {
    yield put(CreateInitTodoItemList([data.name]))
    return [data.name]
  }
}

function log (action) {
  console.log(`dispatch:${JSON.stringify(action)}`)
}

function* rootSagas () {
  yield takeEvery('*', log)
  yield takeEvery(ActionTypes.GetInitTodoListData, initTodoItemList)
}

export default rootSagas