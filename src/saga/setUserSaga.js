import {takeLatest,call,put} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpPost} from '../apis'

function* setUser({payload}) {
  try {
    yield put(
      {type:types.SET_LOADING,loading:true}
    )
    const users =yield call(httpPost,{url:'http://localhost:8000/users',
      body: payload
    });
    console.log(users)
    yield put({type:types.GET_FETCH_USERS_SUCCESS,payload:users,loading:false})
  } catch (error) {
    yield put({ type: types.GET_FETCH_USERS_FAILURE, payload:[],loading:false })
  }
}

function* setUserSaga() {
  yield takeLatest(types.SET_USER,setUser);
}
export default setUserSaga;
