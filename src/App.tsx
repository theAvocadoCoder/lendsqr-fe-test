import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import appStyles from "./app.module.scss";

function App() {
  return (
    <div className="App">
      <div className={appStyles.app_container}>
        <div className={appStyles.top_nav}>
          <TopNav />
        </div>
        <div className={appStyles.sidebar}>
          <Sidebar />
        </div>
        <div className={appStyles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
