import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Homevideoscreen } from "./Screens/Homevideoscreen";
import "./App.css";
import LoginScreen from "./Screens/LoginScreen/Loginscreen";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
export const Layout = ({ children }) => {
  // below usstate use to toggle sidemenu using menu button
  const [sideBarBool, toggleSidebar] = useState(false)
  // const [sideBarBool, toggleSidebar] = useState("")
  const handlesidebar = () => {
    toggleSidebar(value => !value)

  }


  return (
    <>
      <Header handlesidebar={handlesidebar} />
      <div className="appcontainer  flex justify-between ">
        <Sidebar sideBarBool={sideBarBool} handlesidebar={handlesidebar} />
        {children}

      </div>

    </>
  )
}

function App() {
  // const { loading } = useSelector(state => state.auth)
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!loading) {
  //     navigate('/auth')
  //   }
  // }, [loading, navigate])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Homevideoscreen /></Layout>} />
          <Route path="/auth" element={<Layout><LoginScreen /></Layout>} />

          <Route redirect="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
