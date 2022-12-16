import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TodaysCard from "./Components/TodaysCard";
import bb from "../src/assets/tree.jpeg"




const App = () => {
   

      
     return (<div className="app" >
        <div   style={{ backgroundImage:`url(${bb})` , backgroundRepeat:"no-repeat",backgroundSize:"cover" ,objectFit:"cover", width:"100%" , height:"100vh"}}>
        
        <Navbar/>
        <TodaysCard />
        </div>
    </div>);
     
}
export default App;