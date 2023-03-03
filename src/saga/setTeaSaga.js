import * as types from "../redux/actionTypes";
import {takeLatest, call, put, throttle,debounce} from 'redux-saga/effects';
import {httpPostTea, httpPost} from "../apis";
function* setTeas({payload}) {
  try {
    const users =yield call(httpPostTea,{url:'http://localhost:8000/teas',
      body: payload
    });
    yield put({type:types.SET_TEAS_SUCCESS,payload:users})
    yield put({type: types.GET_FETCH_TEAS})
  } catch (error) {
    yield put({ type: types.SET_TEAS_FAILURE, payload:[] })
  }
}
function* setTeasSaga() {
  yield takeLatest(types.SET_TEAS,setTeas)
}
export default setTeasSaga;