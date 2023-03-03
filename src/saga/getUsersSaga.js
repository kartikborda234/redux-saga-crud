import {takeLatest, call, put, throttle,debounce} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpGet} from '../apis'

function* getUsers() {
  try {
    yield put(
      {type:types.SET_LOADING,loading:true}
    )
    const users =yield call(httpGet,'http://localhost:8000/users');
    yield put({type:types.GET_FETCH_USERS_SUCCESS,payload:users,loading:false})
  } catch (error) {
    yield put({ type: types.GET_FETCH_USERS_FAILURE, payload:[],loading:false })
  }
}

function* getUsersSaga() {
  // yield throttle(3000,types.GET_FETCH_USERS,getUsers);
  yield debounce(3000,types.GET_FETCH_USERS,getUsers);
}
export default getUsersSaga;
