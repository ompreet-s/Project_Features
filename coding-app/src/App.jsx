import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Coding from "./Components/Main/Coding";
import Courses from "./Components/Main/Courses";
import Footer from "./Components/Footer";
import CartPage from "./Components/Main/CartPage";
import Learning from "./Components/Main/Learning";
import VideoPage from "./Components/Main/VideoPage";
import Recruiter from "./Components/Recruiter";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/:id" element={<VideoPage />} />
          <Route path="/recruiter" element={<Recruiter />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
