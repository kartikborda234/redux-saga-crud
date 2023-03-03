import {takeLatest, call, put, all,retry } from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpDelete} from '../apis'
import {takeLeading} from "@redux-saga/core/effects";

function* deleteUser({id}) {

  try {
    yield put(
      {type: types.SET_LOADING, loading: true}
    )

    if (Array.isArray(id)) {
      var ids = id.map((i) => {
        return call(httpDelete, `http://localhost:8000/users/${i}`)
      })
    } else {
      var singleUser = yield call(httpDelete, `http://localhost:8000/users/${id}`);
    }
    const users = yield all(singleUser || ids);
    if (users) {
      yield put({type: types.DELETE_USER_SUCCESS, payload: users, loading: false})
      yield put({type: types.GET_FETCH_USERS})
    }
  } catch (error) {
    yield put({type: types.DELETE_USER_FAILURE, payload: [], loading: false})
  }
}

function* deleteUserSaga() {
  yield takeLeading(types.DELETE_USER, deleteUser);
}

export default deleteUserSaga;