import {takeLatest, call, put, all,retry } from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpDeleteTea} from '../apis'
import {takeLeading} from "@redux-saga/core/effects";

function* deleteTea({id}) {
  try {
      const users = yield call(httpDeleteTea, `http://localhost:8000/teas/${id}`);
      yield put({type: types.DELETE_TEA_SUCCESS, payload: users})
      yield put({type: types.GET_FETCH_TEAS})
  } catch (error) {
    yield put({type: types.DELETE_TEA_FAILURE, payload: []})
  }
}

function* deleteTeaSaga() {
  yield takeLeading(types.DELETE_TEA, deleteTea);
}
export default deleteTeaSaga;