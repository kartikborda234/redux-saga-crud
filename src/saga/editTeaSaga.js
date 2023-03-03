import {takeLatest,call,put,apply} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpGetTea} from '../apis'

function* editTea({id}) {
  try {
    const tea =yield call(httpGetTea,`http://localhost:8000/teas/${id}`);
    yield put({type:types.EDIT_TEA_SUCCESS,payload:tea})
  } catch (error) {
    yield put({ type: types.EDIT_TEA_FAILURE, payload:{}})
  }
}

export default function* editTeaSaga() {
  yield takeLatest(types.EDIT_TEA,editTea);
}