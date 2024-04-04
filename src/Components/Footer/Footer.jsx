
import "bootstrap/dist/css/bootstrap.min.css"
import "./bgColor.css"
const Footer=()=>{

  return <>
  <div class="bgColor">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <h4 class="col-md-4 mb-0 text-body-light" style={{color:"white",padding:"70px"}}>© 2024 Past2Present, PICT</h4>
   

    <ul class="nav col-md-6 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
        <h5>Home</h5> </a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5>Sell</h5></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5>Requests</h5></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5>About</h5></a></li>
      <li class="nav-item"><a href="http://pict.edu" class="nav-link px-4 text-body-light"><h5>PICT</h5></a></li>
    </ul>
  </footer>
  </div>
  </>
}
export default Footer;