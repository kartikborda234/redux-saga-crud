import React, {useMemo, useState} from "react";
import Button from "@mui/material/Button";

const Card = () => {
    const [cardData, setCardData] = useState([{name: "airtel1", number: "098983444334"}, {
        name: "vi2",
        number: "098983444334"
    }, {name: "airtel3", number: "098983444334"}, {name: "idea4", number: "2353345465"}, {
        name: "jio5",
        number: "098983444334"
    }, {name: "vi6", number: "098983444334"}, {name: "jio7", number: "098983444334"}, {
        name: "idea8",
        number: "098983444334"
    }, {name: "airtel9", number: "098983444334"}, {name: "jio10", number: "098983444334"}])
    const [removeCard, setRemoveCard] = useState([]);
    const [filterCard, setFilterCard] = useState(cardData);
    const [query, setQuery] = useState("");

    const handleApply = (i, element) => {
        filterCard.splice(i, 1)
        cardData.splice(i,1)
        const card=cardData.filter((e)=>e != element)
        setCardData([...card])
        setRemoveCard([...removeCard, element])
    }
    const handleRemove = (i, element) => {      
        removeCard.splice(i, 1)
        setFilterCard([...filterCard, element])
        setCardData([...cardData,element])
    }
    const handleAllApply = () => {
        setFilterCard('')
        setCardData([])
        setRemoveCard([...removeCard,...filterCard])
    }
    const handleAllRemove = () => {
        setRemoveCard([])
        setFilterCard([...filterCard,...removeCard])
        console.log(filterCard,"filterCard")
    }
    const handleCardFilter = (e) => {
        const searchVal = e.target.value;
        setQuery(searchVal)
        const searchList = cardData.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        setFilterCard(searchList)
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input type="text" placeholder="search..." onChange={(e) => handleCardFilter(e)}
                                   className="form-control" name="search"/>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <Button variant="contained" onClick={handleAllApply}>All apply</Button>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <Button variant="contained" onClick={handleAllRemove}>All remove</Button>
                    </div>
                    <div className="col-sm-6 mt-5">
                        {
                            filterCard.length > 0 && filterCard.map((ele, index) => {
                                return (
                                    <div style={{backgroundColor: "gainsboro", padding: "20px"}}>
                                        <div style={{
                                            backgroundColor: "whitesmoke",
                                            padding: "10px",
                                            borderRadius: "20px",
                                            border: "2px solid black"
                                        }}>{ele.name}<br/>{ele.number}
                                            <button onClick={() => handleApply(index, ele)} style={{marginLeft: "20px"}}
                                                    className="btn btn-info">+
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-sm-6 mt-5">
                        {
                            removeCard.map((ele, index) => {
                                return (
                                    <div style={{backgroundColor: "gainsboro", padding: "20px"}}>
                                        <div style={{
                                            backgroundColor: "whitesmoke",
                                            padding: "10px",
                                            borderRadius: "20px",
                                            border: "2px solid black"
                                        }}>{ele.name}<br/>{ele.number}
                                            <button onClick={() => handleRemove(index, ele)}
                                                    style={{marginLeft: "20px"}} className="btn btn-info">-
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default React.memo(Card);