import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MyProfile.css"
import Footer from "../../Components/Footer/Footer";



const MyProfile=()=>{

  return <>
  <div style={{display:"flex",backgroundColor:"white"}}>
  <div className="col-lg-4 " style={{margin:"100px",width:"500px",marginLeft:"400px"}}>
    <div className="border border-secondary p-4 shadow " >
        <svg className="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-color)" ></rect></svg>
        <br />
        
        <h2 className="fw-normal mt-4 "  >Kanchan Khemnar</h2>
        <br />
       
        <p className="lead para" ><h5>Name :</h5 >- KANCHAN BHAGWAT KHEMNAR
        </p>
        <p className="lead para" ><h5>Registration :</h5 >- I2K22XXXX
        </p>
        <p className="lead para"><h5>Mobile :</h5 >- 91533XXXXX
        </p>
        <p className="lead para"><h5>Email :</h5 >- kanchankhemnar@gmail.com
        
        </p>
        <p className="lead para" ><h5>Stree/Address :</h5 >- Koregaon Bhima, Wagholi
        </p>
        <p className="lead para"><h5>Town/City :</h5 >- Pune, Maharastra
        </p>
        <p><a className="btn btn-primary" href="#">Update »</a></p>
        </div>
      </div>
      <div style={{marginLeft:"15%"}}><Sidebar/></div>
      
      </div>
      <Footer/>
  </>
}
export default MyProfile;