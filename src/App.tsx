import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello World
      <TopNav />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
