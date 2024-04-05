import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSellers.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const BestSellers = () => {

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


  return (
    <>
      <div style={{ border: "20px solid white" }}>
        <br />
        <h1 style={{ color: "white", textAlign: "center" }}>
          OUR BEST SELLERS
        </h1>
        <br />
        <br />
        <div className="cards">
          <Link 
          // to="/Shop"
          to="/Shop?item_name=drafter"
          // to={{pathname: '/Shop/', search: "?name='drafter'"}}
          >
          <div className="card item">
            <img
              src="src\Assets\BestSellers-imgs\drafter.png"
              className="card-img-top"
              alt="..."
            />
        
            <h2 className="textOver">
              Drafter</h2>
          </div>
          </Link>
       
          <Link 
          // to="/Shop"
          to="/Shop?item_name=book"
          // to={{pathname: '/Shop', search: "?item_name='drafter'"}}
          >
          <div className="card item " >
            <img
              src="src\Assets\BestSellers-imgs\book.png"
              className="card-img-top"
              alt="..."
            />
          
            <h2 className="textOver">Books</h2>

          </div>
          </Link>

          <Link 
          // to="/Shop"
          to="/Shop?item_name=calculator"
          // to={{pathname: '/Shop', search: "?item_name='drafter'"}}
          >
          <div className="card item" >
            <img
              src="src\Assets\BestSellers-imgs\calculator.png"
              className="card-img-top"
              alt="..."
            />
            <h2 className="textOver">
              Calculator</h2>
          </div>
          </Link>

        </div>
      </div>
    </>
  );
};
export default BestSellers;
