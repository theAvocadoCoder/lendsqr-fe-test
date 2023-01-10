import React from "react";
import { useParams, Link, NavLink, Outlet, useOutletContext } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import type { User } from "../Users/index";

import backArrow from "./assets/back_arrow.svg";
import placeholderPfp from "./assets/placeholder_pfp.svg";
import starSolid from "./assets/star_solid.svg";
import starOutline from "./assets/star_outline.svg";
import userDetailsStyles from "./userdetails.module.scss";

type ContextType = { user: User };

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState<User>();
  async function getUser() {
    try {
      const res: AxiosResponse = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
      const userObj: User = res.data;
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(JSON.parse(localStorage.getItem("user") as string));
    } catch (error) {
      console.log('Error:', error);
    }
  }

  React.useEffect(() => {
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {
              user?.profile && (<img src={user.profile.avatar || placeholderPfp} alt="" />)
            }
            <div>
              <p>{user && `${user.profile.firstName} ${user.profile.lastName}`}</p>
              <p>odfnhi93847</p>
            </div>
          </div>
          <div>
            <div>
              <p>User's Tier</p>
              <span>
                <img src={starSolid} alt="" />
                <img src={starSolid} alt="" />
                <img src={starOutline} alt="" />
              </span>
            </div>
          </div>
          <div>
            <p>&#8358;{user && user.accountBalance}</p>
            <p>{user && user.accountNumber}/Providus Bank</p>
          </div>
        </div>
        <div className={userDetailsStyles.navcard_div}>
          {
            navcardLinks.map((item, index) => (
              <NavLink key={index} to={`/users/${id}/${item.link}`} className={({ isActive }) => isActive ? userDetailsStyles.active : ""}>{item.title}</NavLink>
            ))
          }
        </div>
      </div>
      <div className={userDetailsStyles.cardtwo_div}>
        <Outlet context={{ user }} />
      </div>
    </div>
  )
}

export function useUser() {
  return useOutletContext<ContextType>();
}

export default UserDetails