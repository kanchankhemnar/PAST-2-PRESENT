import React from "react";
import "./AboutUsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CardComponent = ({name,email}) => {
  return (
    <>
     
      <div
        class=" border border-2 border-primary my-3 px-4 py-5  mx-4 "
        style={{ color: "black",backgroundColor:"black"}}
      >
        <svg
          class="bd-placeholder-img rounded-circle mx-5 "
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <h2 class="fw-normal m-2 py-1" style={{color:"white"}}>{name}</h2>
        <p className="m-2 p-2" style={{ color: "white" }}>{email}</p>
      </div>
    </>
  );
};

const AboutUsPage = () => {
  const array = [
    {
      name: "SHRUTI MONE",
      email: "shrutimone7@gmail.com",
    },
    {
      name: "KANCHAN KHEMNAR",
      email: "kanchankhemnar017@gmail.com",
    },
    {
      name: "PAWAN POOJARY",
      email: "pawanpoojary989@gmail.com",
    },
    {
      name: "SOHAM PHADKE",
      email: "phadkesoham2004@gmail.com",
    },
    {
      name: "PRANAV KULKARNI",
      email: "pranavcoolkarni1115@gmail.com",
    },
  ];
  return (
    <>
      <Header />
      <div className="about-us-container " style={{ marginTop: "6%" }}>
        <h1>About Us</h1>
        <div className="paragraph">
          <p>
            Past2Present is a platform created to facilitate the exchange of
            college stationery and other items within the PICT community. Many
            college students desire to give away their used graphics
            instruments, books, stationery, and other items, while some students
            look for affordable second-hand items from their seniors or peers.
            However, no platform existed that could facilitate this exchange
            within our college community.
          </p>
          <p>
            To address this need, we created Past2Present, a website that
            enables students to exchange their goods effortlessly. Sellers are
            permitted to register their items, along with necessary details such
            as prices and images. Buyers can search for a specific item or
            browse through random goods listed on the website. Upon searching
            for an item, buyers can see all similar items sorted according to
            price. After logging in, they can view the contact details of
            sellers to connect in person and make transactions. Sellers can also
            remove items from the available list after selling them. User
            authentication is done using college credentials, such as
            registration ID and email ID.
          </p>
          <p>Other features of our website include:</p>
          <ul>
            <li>
              Wishlist - Requesting desired items not available on the website
            </li>
            <li>
              Email notification to subscribed users on the addition of a new
              item to the wishlist
            </li>
            <li>Reporting spam items on the website</li>
          </ul>

          <p>
            Past2Present promotes the exchange of items within the PICT
            community, ensuring items are sold at appropriate prices and helping
            relieve the financial burden associated with purchasing them.
            Additionally, it promotes community building within PICT.
          </p>
        </div>

        <h1>Developer Team</h1>
      
        <div className="row mx-5" >
          
          {array.slice(0, 3).map((person, i) => (
            <div key={i} style={{width:"fit-content",marginLeft:"4rem"}}>
              <CardComponent name={person.name} email={person.email} />
            </div>
          ))}
        </div>
        <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
          {array.slice(3).map((person, i) => (
            <div key={i} style={{width:"fit-content",margin:"4rem"}}>
              <CardComponent name={person.name} email={person.email} />
            </div>
          ))}
        </div>
        </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
