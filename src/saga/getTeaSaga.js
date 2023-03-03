import * as types from "../redux/actionTypes";
import {takeLatest, call, put, throttle,debounce} from 'redux-saga/effects';
import {httpGetTea} from "../apis";

function* getTeas() {
  try {
    const users =yield call(httpGetTea,'http://localhost:8000/teas');
    yield put({type:types.GET_TEAS_SUCCESS,payload:users,loading:false})
  } catch (error) {
    yield put({ type: types.GET_TEAS_FAILURE, payload:[],loading:false })
  }
}
function* getTeasSaga() {
  // yield throttle(3000,types.GET_FETCH_USERS,getUsers);
  yield takeLatest(types.GET_FETCH_TEAS,getTeas);
}
export default getTeasSaga;