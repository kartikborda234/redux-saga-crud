import * as types from "../redux/actionTypes";
const initialState = {
  users:[],
  user: null,
  loading: false,
  result: null
}
const myFirstReducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.SET_LOADING:
      return {...state,loading: action?.loading}
    case types.GET_FETCH_USERS_SUCCESS:
    case types.GET_FETCH_USERS_FAILURE:
      return {...state,users:action.payload,loading: action?.loading}
    case types.SET_USER_SUCCESS:
    case types.SET_USER_FAILURE:
      return {...state,result:action.payload,loading: action?.loading}
    case types.DELETE_USER_SUCCESS:
    case types.DELETE_USER_FAILURE:
      return {...state,result:action.payload,loading: action?.loading}
    case types.EDIT_USER_SUCCESS:
    case types.EDIT_USER_FAILURE:
      return {...state,user:action.payload,loading: action?.loading}
    case types.UPDATE_USER_SUCCESS:
    case types.UPDATE_USER_FAILURE:
      return {...state,result:action.payload,loading: action?.loading}
    default:
      return state;
  }
}

export default myFirstReducer;