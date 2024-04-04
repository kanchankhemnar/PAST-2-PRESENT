import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const RandomItem=()=>{
 
  return <>
  
  <div className="col">
          <div className="card shadow-sm">
          <img src="src\assets\pen.png" alt="" />

            <div className="card-body">
              <p className="card-text">
                <h5>INK PEN</h5>
                Price:25/-
                <br />
                10 days used.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" >
                    <Link to="/Shop" style={{color:"black",textDecoration:"none"}}>
                    View
                    </Link>
                    </button>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
  </>
}
export default RandomItem;