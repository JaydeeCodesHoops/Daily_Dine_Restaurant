import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage";
import Breakfast from "./pages/Breakfast.jsx";
import Lunch from "./pages/Lunch.jsx";
import Supper from "./pages/Supper.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/breakfast" element={<Breakfast/>}/>
          <Route path="/lunch" element={<Lunch/>}/>
          <Route path="/Supper" element={<Supper/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
