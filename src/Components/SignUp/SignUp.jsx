import React from "react";
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className='form2' style={{ backgroundImage: 'linear-gradient(to right, #080808, #070708, #060607, #050407, #040306, #090512, #0c071a, #0c0a21, #0d0f31, #0d1242, #0f1353, #161364)'}}>
      {/* <img id='checkout' src={Checkout} alt="" /> */}
      {/* <h3>Home &lt; Sell</h3> */}
      <div className="container2" >
          <h1>Create Account</h1>
          <form action="">
          <label htmlFor="">Enter Name</label>
          <input type="name" placeholder='enter your name' />
          <label htmlFor="">Registration no. of PICT</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Department</label>
          <select name="" id="" class="form-control">
          <option value="">Computer Science</option>
          <option value="">Information Technology</option>
          <option value="">EnTC</option></select>
          <label htmlFor="">Street Address</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Town/City</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Email address</label>
          <input type="email" placeholder='' />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
