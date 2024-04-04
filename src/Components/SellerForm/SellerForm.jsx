import React from "react";
import "./SellerForm.css"
import axios from "axios";


const SellerForm = () => {

  return (
    <div className="bg">
    <div className="SellerForm" >
      <div className="SellerFormContainer">
        <h1>Seller Information</h1>
        <form action="">
          <label htmlFor="">Select Product Category</label>
          <select name="" id="" className="form-control">
            <option value="">Drafter</option>
            <option value="">Books</option>
            <option value="">Others(specify name)</option></select>

          <label htmlFor="">Email address</label>
          <input type="email" placeholder='' />
          <label htmlFor="">Phone no.</label>
          <input type="phone" placeholder='' />
          <label htmlFor="">Product price</label>
          <input type="product price" placeholder='' />
          <label htmlFor="">Years used</label>
          <input type="years used" placeholder='' />
          <label htmlFor="">Details</label>
          <input type="details" placeholder='' />

          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SellerForm;
