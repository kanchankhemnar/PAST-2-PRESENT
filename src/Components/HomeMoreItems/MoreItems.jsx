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

  return <>
  <div >
    <div className="album py-5  " style={{marginTop:"20px"}}>
      

      <center className="  " >
      <h1 style={{color:"white",marginBottom:"50px"}}>More Items </h1>
      </center>
      
      <div className="container ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 shadow">
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