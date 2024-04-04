import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import RandomItem from "../../Components/HomeMoreItems/RandomItem";


const MyUploads=()=>{
  return <>
  <div style={{display:"flex",backgroundColor:"white"}}>
  <div>



  <div className="album py-5 bg-body-tertiary" style={{marginTop:"50px"}}>
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <RandomItem/>
       <RandomItem/>
       <RandomItem/>
       <RandomItem/>

    
      

        
        </div>
      </div>
    </div>
  </div>

<Sidebar/>
</div>
<Footer/>
  </>
}
export default MyUploads;