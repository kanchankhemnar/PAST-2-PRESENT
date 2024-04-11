import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import RandomItem from "../../Components/HomeMoreItems/RandomItem";
import axios from "axios"
import { useState, useEffect } from "react";

const MyUploads=()=>{

  const [myData, setMyData] = useState([]);
  const [error, setIsError] = useState();

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://past-2-present-backend-1.onrender.com/user/myitems",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      );
      if (response.status === 200) {
        console.log("data received", response.data);
        setMyData(response.data[0]);
      }
        console.log(response.data);
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
  {error && <div>Error: {error}</div>}
      {myData && (
  <div style={{display:"flex",backgroundColor:"white"}}>
  <div>
  <div className="album py-5 bg-body-tertiary" style={{marginTop:"50px"}}>
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      { myData.length === 0 ?  <h1 style={{width:"70vw",marginBottom:"68vh",marginLeft:"700px",backgroundColor:"white",marginTop:"2rem"}}>You have no uploads</h1>:
              myData.map((item,i)=>( 
              <RandomItem item={myData[i]} key={i} />))
              }

        </div>
      </div>
    </div>
  </div>

<Sidebar/>
</div>)}
<div >
  {  }


<Footer/>
</div>
  </>
}
export default MyUploads;