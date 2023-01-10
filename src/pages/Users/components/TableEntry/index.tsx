import React from "react";
import { NavLink } from "react-router-dom";
import tableEntryStyles from "./tableentry.module.scss";
import viewDetaiilsIcon from "../../assets/view_details.svg";
import blacklistUserIcon from "../../assets/blacklist_user.svg";
import activateUserIcon from "../../assets/activate_user.svg";
import moreIcon from "../../assets/more_icon.svg";

interface userDataProp {
  orgName: string,
  userName: string,
  email: string,
  phoneNumber: number | string,
  createdAt: string,
  activeStatus: "active" | "blacklisted" | "pending" | "inactive",
  id: number | string,
}

const TableEntry = ({ userData }: { userData: userDataProp }) => {
  const dropdownDiv = React.useRef<HTMLDivElement>(null);

  function toggleDropdown() {
    const newDisplay: string = dropdownDiv.current?.style.display === "grid" ? "none" : "grid";
    dropdownDiv.current && (dropdownDiv.current.style.display = newDisplay);
  }

  return (
    <tr>
      <td>{userData.orgName}</td>
      <td>{userData.userName}</td>
      <td>{userData.email}</td>
      <td>{userData.phoneNumber}</td>
      <td>{userData.createdAt}</td>
      <td>
        <span className={tableEntryStyles[userData.activeStatus]}>
          {userData.activeStatus}
        </span>
      </td>
      <td onClick={toggleDropdown}>
        <img src={moreIcon} alt="" />

        <div ref={dropdownDiv} className={tableEntryStyles.dropdown_container}>
          <NavLink to={`/users/${userData.id}/`}>
            <img src={viewDetaiilsIcon} alt="" />
            <span>View Details</span>
          </NavLink>
          <div>
            <img src={blacklistUserIcon} alt="" />
            <span>Blacklist User</span>
          </div>
          <div>
            <img src={activateUserIcon} alt="" />
            <span>Activate User</span>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default TableEntry