import { useRef } from "react";
import "./Insta.css";
import instaPic from "./Insta1.png";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const storeUser1 = useRef();
  const storePass1 = useRef();

  let details = (e) => {
    e.preventDefault();
    const username = storeUser1.current.value;
    const pass = storePass1.current.value;
    let ud1 = {
      us1: username,
      pa1: pass,
    };
    localStorage.setItem("Login-details", JSON.stringify(ud1));
    storeUser1.current.value = "";
    storePass1.current.value = "";
    navigate("/insta");
  };
  return (
    <div className="main">
      <div className="container">
        <img src={instaPic} alt="My Insta Pic" className="insta-img" />
        <form className="login-form" onSubmit={details}>
          <label>UserName:</label>
          <input
            type="text"
            ref={storeUser1}
            placeholder="Enter the username"
            className="input"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            ref={storePass1}
            placeholder="Enter the password"
            className="input"
            required
          />
          <button type="submit">SignUp</button>
          ------------------OR-----------------
          <br />
          Click the Log in button
          <br />
        </form>
      </div>
    </div>
  );
}
export default Signup;
