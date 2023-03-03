import {takeLatest,call,put} from 'redux-saga/effects';
import * as types from "../redux/actionTypes";
import {httpUpdate} from '../apis'

function* updateUser({payload,id}) {
    try {
        yield put(
            {type:types.SET_LOADING,loading:true}
        )
        const users =yield call(httpUpdate,{url:`http://localhost:8000/users/${id}`,
            body: payload
        });
        yield put({type:types.UPDATE_USER_SUCCESS,payload:users,loading:false})
    } catch (error) {
        yield put({ type: types.UPDATE_USER_FAILURE, payload:[],loading:false })
    }

}
function* updateUserSaga() {
    yield takeLatest(types.UPDATE_USER,updateUser);
}
export default updateUserSaga;