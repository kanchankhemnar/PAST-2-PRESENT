import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};



// const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   useEffect(() => {
//     const getMyPostData = async () => {
//       try {
//         const response = await axios.get("https://past-2-present-backend-1.onrender.com/items/");
//         //console.log(response.data);
//         setMyData(response.data);
//         //console.log(myData);
//         console.log(myData);
//       } catch (error) {
//         setIsError(error.message);
//         console.log(error.message)
//       }
//     };

//     getMyPostData();
//   }, []);



const RandomItem=({item})=>{

  // function handleClick(){

  // }
 
  return <>
  
  <div className="col">
          <div className="card shadow-sm">
          <img src="src\assets\pen.png" alt="" />

            <div className="card-body">
              <p className="card-text">
                <h5>{capitalizeFirstLetter(item.item_name)}</h5>
                Price: {item.price}
                <br />
                Years used: {item.years_used}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                
                 <button type="button" className="btn btn-sm btn-outline-secondary" >
                    <Link to="/Shop" style={{color:"black",textDecoration:"none"}}>
                    View
                    </Link>
                    </button>
                    <button className="btn btn-sm btn-outline-danger" style={{marginLeft:"10px"}}>
                      Remove
                    </button>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
  </>
}
export default RandomItem;