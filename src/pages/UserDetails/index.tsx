import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import backArrow from "./assets/back_arrow.svg";
import placeholderPfp from "./assets/placeholder_pfp.svg";
import userDetailsStyles from "./userdetails.module.scss";

const UserDetails = () => {
  const navcardLinks: { title: string, link: string }[] = [
    {
      title: "General Details",
      link: "",
    },
    {
      title: "Documents",
      link: "documents",
    },
    {
      title: "Bank Details",
      link: "bank-details",
    },
    {
      title: "Loans",
      link: "loans",
    },
    {
      title: "Savings",
      link: "savings",
    },
    {
      title: "App and System",
      link: "app-and-system",
    },
  ];

  return (
    <div className={userDetailsStyles.userdetails_container}>
      <Link to="/users">
        <img src={backArrow} alt="" />
        <span>Back to Users</span>
      </Link>

      <div className={userDetailsStyles.head_div}>
        <h1>User Details</h1>
        <div>
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>

      <div className={userDetailsStyles.cardone_div}>
        <div className={userDetailsStyles.profilecard_div}>
          <div>
            <img src={placeholderPfp} alt="" />
            <div>
              <p>Grace Effiom</p>
              <p>odfnhi93847</p>
            </div>
          </div>
          <div>
            <div>
              <p>User's Tier</p>
              <span>stars</span>
            </div>
          </div>
          <div>
            <p>N200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className={userDetailsStyles.navcard_div}>
          {
            navcardLinks.map((item, index) => (
              <NavLink key={index} to={`/users/1/${item.link}`} className={({ isActive }) => isActive ? userDetailsStyles.active : ""}>{item.title}</NavLink>
            ))
          }
        </div>
      </div>
      <div className={userDetailsStyles.cardtwo_div}>
        <Outlet />
      </div>
    </div>
  )
}

export default UserDetails