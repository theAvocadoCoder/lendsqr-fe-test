import React from "react";
import tableEntryStyles from "./tableentry.module.scss";
import moreIcon from "../../assets/more_icon.svg";

interface userDataProp {
  orgName: string,
  firstName: string,
  email: string,
  phoneNumber: string,
  createdAt: string,
  activeStatus: string,
}

const TableEntry = ({ userData }: { userData: userDataProp }) => {
  return (
    <tr>
      <td>{userData.orgName}</td>
      <td>{userData.firstName}</td>
      <td>{userData.email}</td>
      <td>{userData.phoneNumber}</td>
      <td>{userData.createdAt}</td>
      <td>
        <span className={tableEntryStyles[userData.activeStatus]}>
          {userData.activeStatus}
        </span>
      </td>
      <td>
        <img src={moreIcon} alt="" />
      </td>
    </tr>
  )
}

export default TableEntry