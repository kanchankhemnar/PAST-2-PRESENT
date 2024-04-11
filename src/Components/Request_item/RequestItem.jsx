import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const RequestItem = () => {
  
  const requests = [];

  return (
    <>    <Header/>
    <div className="container " >
      <h1 style={{margin:"10%",color:"white"}}>Current Requests </h1>
      <div className="request-list" style={{color:"white"}}>
        {requests.length === 0 ? (
          <h5 >There are no current requests.</h5>
        ) : (
          requests.map((request, index) => (
            <div key={index} className="request-item">
           
            </div>
          ))
        )}
      </div>
    </div>
    <div style={{marginTop:"25vh"}}>

    <Footer/>
    </div>
    </>

  );
};

export default RequestItem;