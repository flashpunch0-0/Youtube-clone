import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Homevideoscreen } from "./Screens/Homevideoscreen";
import "./App.css";
function App() {
  // below usstate use to toggle sidemenu using menu button
  const [sideBarBool, toggleSidebar] = useState(false)
  const handlesidebar = () => toggleSidebar(value => !value)


  return (
    <>
      <Header handlesidebar={handlesidebar} />
      <div className="appcontainer container flex">
        <Router>
          <Sidebar sideBarBool={sideBarBool} handlesidebar={handlesidebar} />
          <Routes>
            <Route path="/" element={<Homevideoscreen />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
