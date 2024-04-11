// import "bootstrap/dist/css/bootstrap.min.css"
// import Sidebar from "../../Components/Sidebar/Sidebar";
// import "./MyProfile.css"
// import Footer from "../../Components/Footer/Footer";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const MyProfile=()=>{

//   // const [user_id, setUser_id] = useState();
//   // const [user_name, setUser_name] = useState();
//   // const [reg_no, setReg_no] = useState();
//   // const [department, setDepartment] = useState();
//   // const [current_year, setCurrent_year] = useState();
//   // const [phone_no, setPhone_no] = useState();
//   // const [email, setEmail] = useState();
//   const [myData, setMyData]= useState();
//   const [error, setIsError]= useState();

//   useEffect(() => {
//     const getMyPostData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get("https://past-2-present-backend-1.onrender.com/profile/myprofile",
//           {
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}` // Include token in the Authorization header
//           }
//           }
//       );
//       if (response.status === 200) {
//         console.log("data received", response.data);
//         setMyData((response.data)[0]);
//         console.log("mydata",myData);
//       }
        

//       } catch (error) {
//         setIsError("Not able to display profile", error.message);
//         console.log(error.message)
//       }
//     };

//     getMyPostData();
//   }, []);

//   console.log("mydata outside fn", myData)
//   console.log(myData.user_name)
//   return <>
//    {error && <div>Error: {error}</div>}
//       {myData && (
//   <div style={{display:"flex",backgroundColor:"white"}}>
//   <div className="col-lg-4 " style={{margin:"100px",width:"500px",marginLeft:"400px"}}>
//     <div className="border border-secondary p-4 shadow " >
//         <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-color)" ></rect></svg>
//         <br />
        
//         <h2 className="fw-normal mt-4 ">
//           {myData.user_name}
//           </h2>
//         <br />
       
//         <p className="lead para" ><h5>Name:</h5 >
//         {myData.user_name}
//         </p>
//         <p className="lead para" ><h5>Registration id:</h5 >
//         {myData.reg_no}
//         </p>
//         <p className="lead para"><h5>Mobile:</h5 >
//         {myData.phone_no}
//         </p>
//         <p className="lead para"><h5>Email:</h5 >
//         {myData.email}
        
//         </p>
//         {/* <p className="lead para" ><h5>Stree/Address :</h5 >- Koregaon Bhima, Wagholi
//         </p>
//         <p className="lead para"><h5>Town/City :</h5 >- Pune, Maharastra
//         </p> */}
//         <p><a className="btn btn-primary" href="#">Update »</a></p>
//         </div>
//       </div>
//       <div style={{marginLeft:"15%"}}><Sidebar/></div>
      
//       </div>
//       <Footer/>
//   </>
// }
// export default MyProfile;   






import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MyProfile.css";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const MyProfile = () => {
  const [myData, setMyData] = useState(null);
  const [error, setError] = useState(null);

  
  

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://past-2-present-backend-1.onrender.com/profile/myprofile",
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
      } catch (error) {
        setError("Not able to display profile: " + error.message);
        console.log(error.message);
      }
    };

    getMyPostData();
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {myData && (
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div className="col-lg-4" style={{ margin: "100px", width: "500px", marginLeft: "400px" }}>
            <div className="border border-secondary p-4 shadow">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-color)"></rect>
              </svg>
              <br />

              <h2 className="fw-normal mt-4"> {capitalizeFirstLetter(myData.user_name)}</h2>
              <br />

              <p className="lead para ">
              <pre className="d-flex">

                <h5>Name : </h5>
                {capitalizeFirstLetter(myData.user_name)}
              </pre>
              </p>
              <p className="lead para">
                <pre className="d-flex">

                <h5>Registration id : </h5>
                  {myData.reg_no}
                </pre>
              </p>
              <p className="lead para">
              <pre className="d-flex">

                <h5>Mobile : </h5>
                {myData.phone_no}
              </pre>
              </p>
              <p className="lead para">
              <pre className="d-flex">
                <h5>Email : </h5>
                {myData.email}
              </pre>
                
              </p>

              <p>
                <a className="btn btn-primary" href="#">
                  Update »
                </a>
              </p>
            </div>
          </div>
          <div style={{ marginLeft: "15%" }}>
            <Sidebar />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyProfile;
