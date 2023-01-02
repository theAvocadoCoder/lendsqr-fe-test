import React from "react";
import { NavLink } from "react-router-dom";
import sidebarData from "./sidebarData";
import switchOrgIcon from "./assets/switch_organization.svg";
import arrowIcon from "./assets/arrow_icon.svg";
import dashboardIcon from "./assets/dashboard.svg";
import sidebarStyles from "./sidebar.module.scss";

const Sidebar = () => {
  const { customers, business, settings } = sidebarData;

  return (
    <div className={sidebarStyles.sidebar_container}>
      <div className={sidebarStyles.switch_org_div}>
        <img src={switchOrgIcon} alt="icon for switch organization" />
        <p>Switch Organization</p>
        <img src={arrowIcon} alt="arrow icon" />
      </div>
      <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to="/">
        <img src={dashboardIcon} alt="icon for dashboard" />
        <p>Dashboard</p>
      </NavLink>
      <div>
        <p>Customers</p>
        {
          customers.map((data, index) => (
            <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to={data.link} key={index}>
              <img src={require(`./assets/${data.icon}.svg`)} alt={`icon for ${data.title}`} />
              <p>{data.title}</p>
            </NavLink>
          ))
        }
      </div>
      <div>
        <p>Business</p>
        {
          business.map((data, index) => (
            <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to={data.link} key={index}>
              <img src={require(`./assets/${data.icon}.svg`)} alt={`icon for ${data.title}`} />
              <p>{data.title}</p>
            </NavLink>
          ))
        }
      </div>
      <div>
        <p>Settings</p>
        {
          settings.map((data, index) => (
            <NavLink className={({ isActive }) => isActive ? sidebarStyles.active : ""} to={data.link} key={index}>
              <img src={require(`./assets/${data.icon}.svg`)} alt={`icon for ${data.title}`} />
              <p>{data.title}</p>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar