import {takeLatest,call,put,apply} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpGet} from '../apis'

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
  yield takeLatest(types.EDIT_USER,EditUser);
}
export default EditUserSaga;