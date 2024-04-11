import React, {useState} from "react";
import "./SellerForm.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const SellerForm = () => {

  const [item_name, setItem_name] = useState('');
  const [price, setPrice] = useState();
  const [years_used, setYearsUsed] = useState();
  const [discription, setDiscription] = useState();
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        "https://past-2-present-backend-1.onrender.com/user/additem",
        {
          item_name: item_name,
          price: price,
          years_used: years_used,
          discription: discription
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include token in the Authorization header
          }
        }
      );
      
      // Handle successful response
      if (response.status === 200) {
        setIsAdded(true);
        console.log(response.data.message);
        alert("Item added successfully");
        navigate("/MyUploads");
      }
    } catch (error) {
      console.error("Item registration ", error);
      setError("Item not registered");
    }
  };
  

  if (isAdded) {
    return <RedirectedComponent />;
    // return redirect("/");
  } 

  return (
    <div className="bg">
    <div className="SellerForm" >
      <div className="SellerFormContainer">
        <h1>Seller Information</h1>
        <form onSubmit={handleSubmit} action="post">

          <label htmlFor="">Select Product Category</label>
          {/* <select name="" 
          value={item_name}
          onChange={(e) => setItem_name(e.target.value)}
          id="" className="form-control">
            <option value="drafter">Drafter</option>
            <option value="book">Books</option>
            <option value="other">Others(specify name)</option></select> */}
          <select 
  value={item_name}
  onChange={(e) => setItem_name(e.target.value)}
  className="form-control"
>
  <option value="">Select Product Category</option>
  <option value="drafter">Drafter</option>
  <option value="book">Books</option>
  <option value="other">Others (specify name)</option>
</select>

          {/* <label htmlFor="">Email address</label>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='' /> */}

          {/* <label htmlFor="">Phone no.</label>
          <input type="phone" placeholder='' /> */}

          <label htmlFor="">Product price</label>
          <input type="product price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='' />

          <label htmlFor="">Years used</label>
          <input type="years used" 
          value={years_used}
          onChange={(e) => setYearsUsed(e.target.value)}
          placeholder='' />

          <label htmlFor="">Details</label>
          <input type="details" 
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder='' />

          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};




export default SellerForm;
