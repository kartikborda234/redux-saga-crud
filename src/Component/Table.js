import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserFatch, deleteUser, EditUser} from "../redux/action"
import {useState} from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function BasicTable() {
  const navigate=useNavigate();
  const [selectionModel, setSelectionModel] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(state => state?.myFirstReducer?.users)
   const [data, setData] = useState([])

  useEffect(() => {
    dispatch(getUserFatch())
    // toast.success('🦄 fatch users successfully!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  }, [])
  useEffect(()=> {
    if(users && users?.length){
      setData(users)
    }else{
      setData([])
    }
  },[users])
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'action', headerName: 'Action', width: 130,
      renderCell: (params)=> {
        return (<>
          <BorderColorIcon style={{cursor:"pointer"}} onClick={()=>handleEdit(params.id)} />
          <DeleteIcon style={{cursor:"pointer"}} onClick={()=>handleDelete(params.id)}/>
          </>)
      }
    },
  ];
  const handleDelete =(id) => {
    dispatch(deleteUser(id))
  }
  const handleEdit = (id) => {
    navigate(`/create/${id}`)
  }
  const handleCreate=()=>{
    navigate("/create")
  }
  const handleAllClear=()=>{
    dispatch(deleteUser(selectionModel))
  }
  return (
    <React.Fragment>
      <div style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        <Button variant="contained" onClick={handleCreate}>CreateUser</Button>
      </div>
      <Button variant="red" onClick={handleAllClear}>clearall</Button>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(ids) => {
            setSelectionModel(ids);
          }}
        />
      </div>
    </React.Fragment>
  );
}
