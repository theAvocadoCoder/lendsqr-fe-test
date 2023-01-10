import React, { Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import appStyles from "./app.module.scss";

export type MobileSectionProps = {
  mobileNavIsOpen: boolean,
  setMobileNavIsOpen?: Dispatch<SetStateAction<boolean>>,
}

function App() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = React.useState(false);
  return (
    <div className="App">
      <div className={appStyles.app_container}>
        <div className={appStyles.top_nav}>
          <TopNav mobileNavIsOpen={mobileNavIsOpen} setMobileNavIsOpen={setMobileNavIsOpen} />
        </div>
        <div className={appStyles.sidebar}>
          <Sidebar mobileNavIsOpen={mobileNavIsOpen} setMobileNavIsOpen={setMobileNavIsOpen} />
        </div>
        <div className={appStyles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
