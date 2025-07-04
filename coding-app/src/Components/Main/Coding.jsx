import React,{useEffect} from "react";
import CodingNavbar from "./CodingNavbar";
import HackathonPage from "./Hackthon"; 


const Coding = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <div>
      <CodingNavbar />
      <HackathonPage />
    </div>
  );
};

export default Coding;
