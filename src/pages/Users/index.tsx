import React from "react";
import { useLoaderData } from "react-router-dom";
import dateFormat from "dateformat";
import axios, { AxiosResponse } from "axios";

import usersStyles from "./users.module.scss";

import UsersCard from "./components/UsersCard";
import FilterDropdown from "./components/FilterDropdown";
import TableEntry from "./components/TableEntry";

import usersIcon from "./assets/users.svg";
import activeUsersIcon from "./assets/active_users.svg";
import usersWithLoansIcon from "./assets/users_with_loans.svg";
import usersWithSavingsIcon from "./assets/users_with_savings.svg";
import filterIcon from "./assets/filter_icon.svg";

interface UserDataProp {
  orgName: string,
  firstName: string,
  email: string,
  phoneNumber: number | string,
  createdAt: string,
  activeStatus: "active" | "blacklisted" | "pending" | "inactive",
  id: number | string,
}

export interface User {
  createdAt: string,
  orgName: string,
  userName: string,
  email: string,
  phoneNumber: string,
  lastActiveDate: string,
  profile: {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatar: string,
    gender: string,
    bvn: string,
    address: string,
    currency: string,
  },
  guarantor: {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: string,
    address: string,
  },
  accountBalance: string,
  accountNumber: string,
  socials: {
    facebook: string,
    instagram: string,
    twitter: string,
  },
  education: {
    level: string,
    employmentStatus: string,
    sector: string,
    duration: string,
    officeEmail: string,
    monthlyIncome: string[],
    loanRepayment: string,
  }
  id: number,
}

function orgSplitter(str: string): string {
  return str.split("-")
    .map(word => {
      let w = word.split("");
      w[0] = word[0].toUpperCase();
      return w.join("");
    })
    .join(" ");
}

function numSplitter(num: number | string): number | string {
  let numstr = num.toString();
  numstr = numstr.split("")
    .filter(char => (
      Number(char)
      // char !== " "
    ))
    .join("")

  return typeof num === "number" ? Number(numstr) : numstr;
}

export async function loader() {
  const users: AxiosResponse = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
  let userDataArray: UserDataProp[] = [];
  const userData: User[] = users.data;
  userData.forEach((user: User) => {
    const statuses: ("active" | "blacklisted" | "pending" | "inactive")[] = ["active", "blacklisted", "inactive", "pending"];
    let activeStatus: "active" | "blacklisted" | "pending" | "inactive" = statuses[Math.floor(Math.random()*10) % 4];
    userDataArray.push({
      orgName: orgSplitter(user.orgName),
      firstName: user.profile.firstName,
      email: user.email.toLowerCase(),
      phoneNumber: numSplitter(user.phoneNumber),
      createdAt: dateFormat(new Date(user.createdAt), "mmm d, yyyy, h:MM TT"),
      activeStatus: activeStatus,
      id: user.id,
    })
  })
  return userDataArray;
}

const Users = () => {
  const users: UserDataProp[] = useLoaderData() as UserDataProp[];
  const filterDropdownDiv = React.useRef<HTMLDivElement>(null);
  console.log(users);

  function toggleFilterDropdown() {
    const newDisplay: string = filterDropdownDiv.current?.style.display === "block" ? "none" : "block";
    filterDropdownDiv.current && (filterDropdownDiv.current.style.display = newDisplay);
  }
  return (
    <div className={usersStyles.users_container}>
      <h1>Users</h1>

      {/* cards */}
      <div className={usersStyles.cards_container}>
        <UsersCard title="Users" value="2,453" img={usersIcon} />
        <UsersCard title="Active Users" value="2,453" img={activeUsersIcon} />
        <UsersCard title="Users with Loans" value="12,453" img={usersWithLoansIcon} />
        <UsersCard title="Users with Savings" value="102,453" img={usersWithSavingsIcon} />
      </div>

      {/* table */}
      <div className={usersStyles.table_container}>
        <table>
          <thead>
            <tr onClick={toggleFilterDropdown}>
              <th>
                <div>
                  <p>Organization</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>
                <div>
                  <p>Username</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>
                <div>
                  <p>Email</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>
                <div>
                  <p>Phone Number</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>
                <div>
                  <p>Date Added</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>
                <div>
                  <p>Status</p>
                  <img src={filterIcon} alt="" />
                </div>
              </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <TableEntry key={index} userData={user} />
              ))
            }
          </tbody>
        </table>
      </div>

      {/* dropdown */}
      <div ref={filterDropdownDiv} className={usersStyles.filterdropdown_container}>
        <FilterDropdown />
      </div>

      {/* pagination */}
      <div>
        <div>
          <p>
            Showing
            <span>
              100
              <img src="" alt="" />
            </span>
            <span>
              out of 100
            </span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Users