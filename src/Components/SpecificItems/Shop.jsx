import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SpecificItems from "./SpecificItems";
import axios from "axios";


const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const Shop = ({ item_name }) => {
  const [myData, setMyData] = useState();
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const response = await axios.get(
          `https://past-2-present-backend-1.onrender.com/items/${item_name}`
        );
        console.log(item_name);
        console.log(response.data);
        const filteredItem = response.data;
        console.log("filtereditem", filteredItem);
        // .find(
        //   (item) => item.item_id === parseInt(id)
        // );
        console.log("filterd data", filteredItem);
        //console.log(filteredItem.item_name);
        setMyData(filteredItem);
        // console.log("inside fn", myData);
        //  console.log("inside fn", myData.item_name);
        // setMyData(response);
        //console.log("mydata", myData);
      } catch (error) {
        setIsError(error.message);
        console.log(isError);
      }
    };

    getMyPostData();
  }, []);

  return (
    myData && (
      <>
        <div>
          <div
            style={{
              textAlign: "center",
              color: "gray",
              padding: "20px",
            }}
          >
            <h1
              style={{
                marginLeft: "650px",
                width: "max-content",
                marginTop: "60px",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              {/* SHOP */}
              {capitalizeFirstLetter(item_name)}
            </h1>
            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {myData.map((item, i) => (
                    <SpecificItems key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Shop;

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SpecificItems from "./SpecificItems";
// import axios from "axios";

// const Shop = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   useEffect(() => {
//     const getMyPostData = async () => {
//       try {
//         const response = await axios.get("https://past-2-present-backend-1.onrender.com/items/", {
//           withCredentials: false // Enable CORS mode
//         });
//         setMyData(response.data);
//       } catch (error) {
//         setIsError(error.message);
//       }
//     };

//     getMyPostData();
//   }, []);

//   useEffect(() => {
//     console.log(myData);
//   }, [myData]);

//   return (
//     <>
//       <div>
//         <div
//           style={{
//             textAlign: "center",
//             color: "gray",
//             padding: "20px",
//           }}
//         >
//           <h1
//             style={{
//               marginLeft: "650px",
//               width: "max-content",
//               marginTop: "60px",
//               padding: "20px",
//               borderRadius: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             SHOP
//           </h1>
//           <div className="album py-5 bg-body-tertiary">
//             <div className="container">
//               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//                 {myData.map((item, i) => (
//                   <SpecificItems key={i} item={item} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;
