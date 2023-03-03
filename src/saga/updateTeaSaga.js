import {takeLatest,call,put} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpUpdateTea} from '../apis'

function* updateTea({payload,id}) {
  console.log(payload,id,"payloa")
  try {
    const users =yield call(httpUpdateTea,{url:`http://localhost:8000/teas/${id}`,
      body: payload
    });
    yield put({type:types.UPDATE_TEA_SUCCESS,payload:users})
    yield put({ type: types.EDIT_TEA_FAILURE, payload:null})
  } catch (error) {
    yield put({ type: types.UPDATE_TEA_FAILURE, payload:[] })
  }

}
function* updateTeaSaga() {
  yield takeLatest(types.UPDATE_TEA,updateTea);
}
export default updateTeaSaga;