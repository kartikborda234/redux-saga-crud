import {takeLatest,call,put} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpGet} from '../apis'
import {throttle} from "@redux-saga/core/effects";

function* EditUser({id}) {
  try {
    yield put(
      {type:types.SET_LOADING,loading:true}
    )
    const users =yield call(httpGet,`http://localhost:8000/users/${id}`);
    yield put({type:types.EDIT_USER_SUCCESS,payload:users,loading:false})
  } catch (error) {
    yield put({ type: types.EDIT_USER_FAILURE, payload:[],loading:false })
  }
}


function* EditUserSaga() {
  yield throttle(5000,types.EDIT_USER,EditUser);
}
export default EditUserSaga;