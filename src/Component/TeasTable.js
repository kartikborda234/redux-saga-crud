import React, {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {deleteTea, EditTea, getTeaFatch} from "../redux/action";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const TeasTable = () => {
    const navigate = useNavigate();
    const teas = useSelector((state) => state.teaReducer.teas)
    const dispatch = useDispatch()

    const [graphData, setGraphData] = useState(null)
    useEffect(() => {
        dispatch(getTeaFatch())
    }, [])

    useEffect(() => {
        if (teas && teas?.length) {
            setGraphData(teas)
        } else {
            setGraphData([])
        }
    }, [teas])

    const handleTeas = () => {
        navigate("/tea")
    }
  const handleGraph = () => {
    navigate("/graph")
  }
    const handleEdit = (id) => {
        dispatch(EditTea(id))
        navigate(`/tea/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(deleteTea(id))
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="mb-3" style={{display: "flex", justifyContent: "center"}}>
                            <Button variant="contained"  style={{marginRight: "10px"}} onClick={handleTeas}>Add Tea</Button>
                            <Button variant="contained" onClick={handleGraph}>View as Graph</Button>
                        </div>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 700}} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left">Date</StyledTableCell>
                                        <StyledTableCell align="right">Teas</StyledTableCell>
                                        <StyledTableCell align="right">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {graphData && graphData.map((row) => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell align="left">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.tea}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <Button variant="contained" style={{marginRight: "10px"}}
                                                        onClick={() => handleEdit(row.id)}>Edit</Button>
                                                <Button variant="contained"
                                                        onClick={() => handleDelete(row.id)}>Delete</Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TeasTable;