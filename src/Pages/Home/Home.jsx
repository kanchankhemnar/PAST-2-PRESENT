import "./Home.css"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import BestSellers from "../../Components/BestSellers/BestSellers"
import MoreItems from "../../Components/HomeMoreItems/MoreItems"
import Footer from "../../Components/Footer/Footer"

const Home=()=>{

  return (
<>

      <Header />
     
      
      <HeroSection/>
      
      <BestSellers/>
      <MoreItems />
      <Footer/>

</>



  )
}
export default Home;