import React from "react";
import *as types from "./actionTypes"
const initialState = {
  teas:[],
  result: null,
  tea:null
}
const teaReducer=(state=initialState,action)=> {
   switch (action.type) {
     case types.GET_TEAS_SUCCESS:
     case types.GET_TEAS_FAILURE:
       return {...state,teas:action.payload}
     case types.SET_TEAS_SUCCESS:
     case types.SET_TEAS_FAILURE:
       return {...state,result:action.payload}
     case types.DELETE_TEA_SUCCESS:
     case types.DELETE_TEA_FAILURE:
       return {...state,result:action.payload}
     case types.EDIT_TEA_SUCCESS:
     case types.EDIT_TEA_FAILURE:
       return {...state,tea:action.payload}
     case types.UPDATE_TEA_SUCCESS:
     case types.UPDATE_TEA_FAILURE:
       return {...state,result:action.payload}
     default:
       return state
   }
}
export default teaReducer