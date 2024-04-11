import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SpecificItems = ({item, key }) => {
  const token = localStorage.getItem('token');
  console.log(token);
  console.log(item);

  return (
    <>
      
      <div className="col">
        <div className="card shadow-sm">
          <img src="src\assets\pen.png" alt="" />

          <div className="card-body">
            <p style={{ textAlign: "initial" }}>
              {/* <h5>INK PEN</h5> */}
              <h5>{capitalizeFirstLetter(item.item_name)}</h5>
              {/* Price:25/- */}
              Price: {item.price}
              <br />
              {/* 10 days used. */}
              Years used: {item.years_used}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >

                  <Link
                    to={{pathname: token ? '/ShopItems/' + item.item_id : '/Login', search: `?id=${item.item_id}`}}
                    // to={'/ShopItems/'+item.item_id}
                    style={{ color: "black", textDecoration: "none" }}
                    
                  >
                    View
                  </Link>

                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecificItems;
