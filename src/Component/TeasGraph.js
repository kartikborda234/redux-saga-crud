import React, {useEffect, useState} from "react";
import  {useSelector} from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const TeasGraph = () => {
  const navigate=useNavigate()
  const teas = useSelector((state) => state.teaReducer.teas)

  const [graphData, setGraphData] = useState(null)

  const handleTeasTable=()=>{
    navigate("/teasTable")
  }

  useEffect(() => {
    if (teas && teas?.length) {
      setGraphData([...teas.map((ele) => {return {...ele,tea: ele?.tea ? parseInt(ele?.tea) : 0}})])
    } else {
      setGraphData([])
    }
  }, [teas])
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className='row'>
          <div className="line-chart col-lg-12">
            <div className="mb-3" style={{display: "flex", justifyContent: "center"}}>
              <Button variant="contained"  style={{marginRight: "10px"}} onClick={handleTeasTable}>Back</Button>
            </div>
            <LineChart
              width={1200}
              height={800}
              data={graphData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="date"/>
              <YAxis interval="preserveStartEnd"/>
              <Tooltip/>
              <Legend/>
              <Line
                type="monotone"
                dataKey="tea"
                stroke="#8884d8"
                activeDot={{r: 8}}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TeasGraph;