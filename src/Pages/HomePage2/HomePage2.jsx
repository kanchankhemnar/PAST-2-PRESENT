import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Shop from "../../Components/SpecificItems/Shop";
import { useLocation } from 'react-router-dom';


const HomePage2 = () => {

  const location = useLocation();
  const item_name = new URLSearchParams(location.search).get("item_name");


  return (
    <>
    {console.log("inhp2", item_name)}
      <Header />
      <Shop item_name={item_name}/>
      <Footer />
    </>
  );
};
export default HomePage2;
