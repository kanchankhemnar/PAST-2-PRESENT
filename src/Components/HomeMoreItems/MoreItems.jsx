import "bootstrap/dist/css/bootstrap.min.css"
import RandomItem from "./RandomItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SpecificItems from "../SpecificItems/SpecificItems";


const MoreItems=()=>{
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const response = await axios.get("https://past-2-present-backend-1.onrender.com/items/");
        //console.log(response.data);
        setMyData(response.data);
        //console.log(myData);
        console.log(myData);
      } catch (error) {
        setIsError(error.message);
        console.log(error.message)
      }
    };

    getMyPostData();
  }, []);
//let array=[0,1,2,3,4,5,6,7,8,9,10,11];
  return <>
  <div>
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {
              myData.map((item,i)=>( 
              <SpecificItems item={myData[i]} key={i} />))
              }
        </div>
      </div>
    </div>
  </div>  
  </>
}

export default MoreItems;