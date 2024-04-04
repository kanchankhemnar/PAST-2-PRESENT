import "bootstrap/dist/css/bootstrap.min.css"
import ProfileIcon from "../ProfileIcon/ProfileIcon";
const UpdatedHeader=()=>{
return <>
<div style={{width:"100vw"}} className="fixed-top">
<header className="p-3 text-bg-dark " style={{border:"3px solid white" }}>


    <div className="container">
     
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <h2>Past2Present</h2>
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" previewlistener="true">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Sell</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Requests</a></li>
         
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"  />
        </form>

        <div className="text-end" style={{display:"flex" ,marginLeft:"20px"}} >
        <ProfileIcon  /><h5 style={{margin:"5px"}}>Kanchan</h5>
         
        </div>
      </div>
    </div>
  </header>
  </div>

</>
}
export default UpdatedHeader;