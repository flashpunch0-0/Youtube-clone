import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Homevideoscreen } from "./Screens/Homevideoscreen";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="appcontainer flex">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homevideoscreen />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
