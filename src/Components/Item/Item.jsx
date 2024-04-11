import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import image from "../../Assets/pen.png";
import axios from "axios";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Item = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  console.log(id);

  const [myData, setMyData] = useState();
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getMyPostData = async () => {
      try {
        const response = await axios.get(
          `https://past-2-present-backend-1.onrender.com/items/id/${id}`
        );
        console.log(response.data);
        const filteredItem = response.data[0];
        console.log("filtereditem", filteredItem);
        // .find(
        //   (item) => item.item_id === parseInt(id)
        // );
        console.log("filterd data", filteredItem);
        //console.log(filteredItem.item_name);
        setMyData(filteredItem);
      
      } catch (error) {
        setIsError(error.message);
        console.log(isError);
      }
    };

    getMyPostData();
  }, []);

  return (
    myData &&
    <>
     

      {console.log("inside fn", myData)};
      <div className="" >
        <div className="Item">
          <div
            className="row p-2 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border border-secondary text-body-emphasis mt-5 bg-light"
            style={{
              marginLeft: "200px",
              marginRight: "200px",
              marginBottom: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              boxShadow: " rgb(10, 221, 233) 10px 20px 40px -6px",
            }}
          >
            <span
              className="p-lg-5 pt-lg-1"
              style={{ maxWidth: "fit-content" }}
            >
              <h1
                className="display-6 fw-bold lh-2   "
                style={{ color: "black" }}
              >
              
                {capitalizeFirstLetter(myData.item_name)}
              </h1>
              <br />
              <p className="mb-2 "  >
                <h5>Seller Info:</h5>
                <br />
                <div style={{ display: "flex" }}>
                 
                  Name :
                  <h5 className="pt-1">
                  
                    <pre> {myData.user_name}</pre>
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
              
                  Contact :
                  <h5 className="pt-1">
                    
                    <pre> {myData.phone_no}</pre>
                  </h5>
                </div>
                <div style={{ display: "flex" }}>
            
                  Email :
                  <h5 className="pt-1">
                    
                    <pre> {myData.email}</pre>
                  </h5>
                </div>
                <div style={{ display: "flex" }}>
                 
                  Price :
                  <h5 className="pt-1">
                    
                    <pre> {myData.price}</pre>
                  </h5>
                </div>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-lg px-2 me-md-2 fw-bold border border-danger"
                  style={{ color: "red" }}
                >
                  Report Spam
                </button>
              </div>
            </span>
            <div
              className="col-10 col-sm-8 col-lg-6 mt-4"
              style={{ paddingBottom: "50px" }}
            >
              <h2 style={{ color: "gray" }}>
                <pre>Image</pre>
              </h2>
             
              <img
                   src={image}
                className="d-block mx-lg-auto img-fluid  pl-5 "
                alt=""
                width="500"
                loading="lazy"
                style={{ borderRadius: "20px" }}
              />
              
              <br />
              <pre>
               
                About Item :
              
                <h6 className="pt-2">
                
                 {myData.item_message}
                </h6>
              </pre>
            </div>
          </div>
        </div>
        <div className="note">
          <h3 className="slide">
            
Note: The contacts of sellers have been verified. If any inappropriate content appears, please report it as spam.
          </h3>
        </div>
      </div>
    </>
  );
};
export default Item;
