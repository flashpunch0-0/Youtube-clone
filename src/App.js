import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Homevideoscreen } from "./Screens/Homevideoscreen";
import "./App.css";
import LoginScreen from "./Screens/LoginScreen/Loginscreen";
import WatchScreen from "./Screens/watchScreen/WatchScreen";
import SearchScreen from "./Screens/SearchScreen";

export const Layout = ({ children }) => {
  // below usstate use to toggle sidemenu using menu button
  const [sideBarBool, toggleSidebar] = useState(false)
  const handlesidebar = () => {
    toggleSidebar(value => !value)

  }


  return (
    <>
      <Header handlesidebar={handlesidebar} />
      {/* <div className="appcontainer  flex justify-between "> */}
      <div className="appcontainer flex   ">
        <Sidebar sideBarBool={sideBarBool} handlesidebar={handlesidebar} />
        {children}

      </div>

    </>
  )
}

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Homevideoscreen /></Layout>} />
          <Route path="/auth" element={<Layout><LoginScreen /></Layout>} />
          <Route path="/search/:query" element={<Layout><SearchScreen /></Layout>} />
          <Route path="/watch/:id" element={<Layout><WatchScreen /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
