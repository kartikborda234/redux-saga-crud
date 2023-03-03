import {all} from 'redux-saga/effects';
import getUsersSaga from "./getUsersSaga";
import setUserSaga from "./setUserSaga";
import deleteUserSaga from "./deleteUserSaga";
import EditUserSaga from "../saga/EditUserSaga";
import updateUserSaga from "./updateUserSaga";
import getTeasSaga from "./getTeaSaga";
import setTeasSaga from "./setTeaSaga";
import deleteTeaSaga from "./deleteTeaSaga";
import EditTeaSaga from "./editTeaSaga";
import updateTeaSaga from "./updateTeaSaga";
export default function* rootSaga() {
  yield all([
    getUsersSaga(),
    setUserSaga(),
    deleteUserSaga(),
    EditUserSaga(),
    updateUserSaga(),
    getTeasSaga(),
    setTeasSaga(),
    deleteTeaSaga(),
    EditTeaSaga(),
    updateTeaSaga(),
  ])
  // code after all-effect
}