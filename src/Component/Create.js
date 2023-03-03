import React, {useEffect, useState} from "react";
import {Container, Input } from '@mui/material';
import Button from '@mui/material/Button';
import {setUserPost, getUserFatch, EditUser, updateUser} from "../redux/action"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {useParams } from 'react-router-dom';
const MyForm=()=>{
  const {id}=useParams();
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const editUser = useSelector(state => state?.myFirstReducer?.user)
  console.log('editUser',editUser)
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })

  useEffect(()=>{
    if(editUser){
      setUser(editUser)
    }
  },[editUser])
  const handleChange=(prop)=>(e)=>{
      setUser({...user,[prop]:e.target.value})
      console.log(user,"user")
  }
  const handleSubmit=()=> {
      if (!editUser){
          dispatch(setUserPost(user));
          navigate("/")
      }else {
          dispatch(updateUser(user,id));
          navigate("/")
      }
  }
  const handleCancel=()=> {
      navigate("/")
  }
  useEffect(()=>{
    if(id){
      dispatch(EditUser(id))
    }
  },[id])
  return(
    <Container>
      {/*<Input placeholder="id" value={user.id} disabled fullWidth/>*/}
      <Input placeholder="Enter name" value={user.name} onChange={handleChange('name')} fullWidth/>
      <Input placeholder="Email" value={user.email}  onChange={handleChange('email')} fullWidth/>
      <Input placeholder="Password" value={user.password} onChange={handleChange('password')} fullWidth/>
      <Button variant="contained"  onClick={handleCancel}><ArrowBackIcon />Cancel</Button>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Container>
  )
}
export default MyForm;