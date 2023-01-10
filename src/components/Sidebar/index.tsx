import React from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

import sidebarData from "./sidebarData";

import switchOrgIcon from "./assets/switch_organization.svg";
import arrowIcon from "./assets/arrow_icon.svg";
import dashboardIcon from "./assets/dashboard.svg";
import logoutIcon from "./assets/logout.svg";

import sidebarStyles from "./sidebar.module.scss";
import MobileSection from "../MobileSection";
import type { MobileSectionProps } from "../../App";

const Sidebar = ({ mobileNavIsOpen, setMobileNavIsOpen }: MobileSectionProps) => {
  const windowSize = useWindowSize();
  const { customers, business, settings } = sidebarData;

  React.useEffect(() => {
    if (windowSize.innerWidth < 1024) {
      if (setMobileNavIsOpen) setMobileNavIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleMobileNavIsOpen() {
    if (setMobileNavIsOpen) setMobileNavIsOpen(!mobileNavIsOpen);
  }

  return (
    <div className={
      windowSize.innerWidth >= 1024
        ? sidebarStyles.sidebar_container
        : mobileNavIsOpen
        ? `${sidebarStyles.sidebar_container} ${sidebarStyles.show}`
        : sidebarStyles.hidden
    }>
      <div className={sidebarStyles.mobilesection_div}>
        <MobileSection />
      </div>
      <div className={sidebarStyles.switch_org_div}>
        <img src={switchOrgIcon} alt="icon for switch organization" />
        <p>Switch Organization</p>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
      <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to="/" onClick={toggleMobileNavIsOpen}>
        <img src={dashboardIcon} alt="icon for dashboard" />
        <p>Dashboard</p>
      </NavLink>
      {
        ["Customers", "Business", "Settings"].map((title, index) => (
          <div key={index}>
            <p>{title}</p>
            {
              [customers, business, settings][index].map((data, index) => (
                <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to={data.link} key={index} onClick={toggleMobileNavIsOpen}>
                  <img src={require(`./assets/${data.icon}.svg`)} alt={`icon for ${data.title}`} />
                  <p>{data.title}</p>
                </NavLink>
              ))
            }
          </div>
        ))
      }
      <div className={sidebarStyles.footer_div}>
        <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to="/login">
          <img src={logoutIcon} alt="icon for logout" />
          <p>Logout</p>
        </NavLink>
        <span>v1.2.0</span>
      </div>
    </div>
  )
}

export default Sidebar