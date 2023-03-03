import * as types from "./actionTypes";

export const getUserFatch=()=>({
  type:types.GET_FETCH_USERS
});
export const setUserPost=(payload)=>({
  type:types.SET_USER,
  payload
});

export const deleteUser=(id)=>({
  type:types.DELETE_USER,
  id
})

export const EditUser=(id)=>({
  type:types.EDIT_USER,
  id
})

export const updateUser=(payload,id)=>({
  type:types.UPDATE_USER,
  payload,
  id
})

export const setLoading=()=>({
  type:types.SET_LOADING,
})

export const setData=(payload)=>({
  type:"SET_DATA",
  payload
})

export const getTeaFatch=()=>({
  type:types.GET_FETCH_TEAS
});

export const setTeaPost=(payload)=>({
  type:types.SET_TEAS,
  payload
});

export const deleteTea=(id)=>({
  type:types.DELETE_TEA,
  id
})

export const EditTea=(id)=>({
  type:types.EDIT_TEA,
  id
})

export const updateTea=(payload,id)=>({
  type:types.UPDATE_TEA,
  payload,
  id
})