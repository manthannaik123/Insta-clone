import React, { useRef } from "react";
import "./Insta.css";
import instaPic from "./Insta1.png";
import { useNavigate } from "react-router-dom";

function Insta() {
  const storeUser = useRef();
  const storePass = useRef();
  const navigate = useNavigate();

  let storedata = JSON.parse(localStorage.getItem("Login-details"));

  if (storedata) {
    console.log("Register_username:", storedata.us1);
    console.log("Register_Password:", storedata.pa1);
  } else {
    console.log("No user data");
  }
  let lo_details = (e) => {
    e.preventDefault();
    let us2 = storeUser.current.value;
    let pa2 = storePass.current.value;

    console.log("Login username:", us2);
    console.log("Login password:", pa2);

    if (
      storedata.us1 === storeUser.current.value &&
      storedata.pa1 === storePass.current.value
    ) {
      console.log("Correct password");
      navigate("/Profile");
    } else {
      alert("wrong password");
    }
    storeUser.current.value = "";
    storePass.current.value = "";
  };

  return (
    <div className="main">
      <div className="container">
        <img src={instaPic} alt="My Insta Pic" className="insta-img" />
        <form className="login-form" onSubmit={lo_details}>
          <label>UserName:</label>
          <input
            type="text"
            ref={storeUser}
            placeholder="Enter the username"
            className="input"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            ref={storePass}
            placeholder="Enter the password"
            className="input"
            required
          />
          <button type="submit">Log in</button>
          ------------------OR-----------------
          <br /> Dont have an account?? <br />
          Click the Sign up button
        </form>
      </div>
    </div>
  );
}

export default Insta;
