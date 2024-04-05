import "./Home.css"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import BestSellers from "../../Components/BestSellers/BestSellers"
import MoreItems from "../../Components/HomeMoreItems/MoreItems"
import Footer from "../../Components/Footer/Footer"
import UpdatedHeader from "../../Components/UpdatedHeader/UpdatedHeader"
import RequestItem from "../../Components/Request_item/RequestItem"

const Home=()=>{

  return (
<>

      <Header />
      {/* <UpdatedHeader/> */}
      
      <HeroSection/>
      {/* <RequestItem/> */}
      <BestSellers/>
      <MoreItems />
      <Footer/>

</>



  )
}
export default Home;