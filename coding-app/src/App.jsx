import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Coding from "./Components/Main/Coding";
import Courses from "./Components/Main/Courses";
import Footer from "./Components/Footer";
import CartPage from "./Components/Main/CartPage";
import Learning from "./Components/Main/Learning";
import VideoPage from "./Components/Main/VideoPage";
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/:id" element={<VideoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
