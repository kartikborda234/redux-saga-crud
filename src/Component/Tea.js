import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getTeaFatch, setData, setTeaPost, updateTea} from "../redux/action"
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';

import Button from "@mui/material/Button";

const Tea = ({tea, setData}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const chartData = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    const dispatch = useDispatch()
    const [data, setAllData] = useState(
        {}
    )
    const [dateError, setDateError] = useState({error:'',disable:false});
    const teas = useSelector((state) => state.teaReducer.teas)
    let newDate = new Date().toISOString()
    const editTea = useSelector(state => state?.teaReducer?.tea)
    useEffect(() => {
        dispatch(getTeaFatch())
    }, [])
    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name==="date"){
            teas.map((ele)=>{
                if (new Date(ele.date).toLocaleDateString()===new Date(value).toLocaleDateString()){
                    setDateError({error:"date already exits",disable: true})
                }
            })
        }else {
            setAllData({...data, [name]: value})
        }
    }
    useEffect(() => {
        if (editTea) {
            setAllData(editTea)
        }
    }, [editTea])
    const handleSubmit = async () => {
        // setData([...tea,data])
        if (!id) {
            dispatch(setTeaPost(data))
        } else {
            dispatch(updateTea(data, id))
        }
        setAllData({})
        navigate("/teasTable")
    }
    const getDisabled=()=>{
        return dateError.disable
    }
    const handleGraph = () => {
        navigate('/graph')
    }
    const handleCancel = () => {
        navigate('/teasTable')
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-sm-6">
                        <div className="mb-5">
                            <Button variant="contained" onClick={handleCancel}>Cancel</Button>
                        </div>
                        <div className="form-group">
                            <label>Tea</label>
                            <input type="number" className="form-control" value={data.tea} name="tea"
                                    onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group mt-3">
                            <label>Date</label>
                            <input type="datetime-local" className="form-control" value={data.date} max={newDate.slice(0,newDate.lastIndexOf(":"))}
                                   onChange={(e) => handleChange(e)}
                                   name="date"/>
                            <span style={{color:"red"}}>{dateError.error}</span>
                        </div>
                        <div className="form-group mt-3">
                            <button type='button' className="btn btn-primary" disabled={getDisabled()} onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="form-group mt-3">
                            <Button variant="contained" onClick={handleGraph}>See Graph</Button>
                        </div>
                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setData(data))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        tea: state?.teaReducer?.teas
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tea)