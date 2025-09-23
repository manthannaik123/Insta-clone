import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insta from "./Components/Insta";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Insta" element={<Insta />}></Route>
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
