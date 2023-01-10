import React from "react";
import { useLoaderData } from "react-router-dom";
import dateFormat from "dateformat";
import axios, { AxiosResponse } from "axios";
import ReactPaginate from "react-paginate";

import usersStyles from "./users.module.scss";

import UsersCard from "./components/UsersCard";
import FilterDropdown from "./components/FilterDropdown";
import TableEntry from "./components/TableEntry";

import usersIcon from "./assets/users.svg";
import activeUsersIcon from "./assets/active_users.svg";
import usersWithLoansIcon from "./assets/users_with_loans.svg";
import usersWithSavingsIcon from "./assets/users_with_savings.svg";
import filterIcon from "./assets/filter_icon.svg";
import arrowIcon from "./assets/arrow_icon.svg";

interface UserDataProp {
  orgName: string,
  userName: string,
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
      userName: user.userName,
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

  const [pageOffset, setPageOffset] = React.useState(0);
  // eslint-disable-next-line
  const [itemsPerPage, setItemsPerPage] = React.useState(9);
  
  const endOffset = pageOffset + itemsPerPage;
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const filterDropdownDiv = React.useRef<HTMLDivElement>(null);
  function toggleFilterDropdown() {
    const newDisplay: string = filterDropdownDiv.current?.style.display === "block" ? "none" : "block";
    filterDropdownDiv.current && (filterDropdownDiv.current.style.display = newDisplay);
  }

  const handlePageClick = (event: Event & { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };

  return (
    <div className={usersStyles.users_container}>
      <h1>Users</h1>

      {/* cards */}
      <div className={usersStyles.cards_container}>
        <UsersCard title="Users" value={users.length} img={usersIcon} />
        <UsersCard title="Active Users" value={users.filter(u=>u.activeStatus === "active").length} img={activeUsersIcon} />
        <UsersCard title="Users with Loans" value={users.filter(u=>u.activeStatus === "blacklisted").length} img={usersWithLoansIcon} />
        <UsersCard title="Users with Savings" value={users.filter(u=>u.activeStatus === "inactive").length} img={usersWithSavingsIcon} />
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
              users.slice(pageOffset, endOffset).map((user) => (
                <TableEntry key={user.id} userData={user} />
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
      <div className={usersStyles.paginationcontainer_div}>
        <div>
          <p>
            Showing &nbsp;
            <span> {itemsPerPage}
              <img src={arrowIcon} alt="" />
            </span>
            &nbsp; out of {users.length}
          </p>
        </div>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=" "
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel=" "
            containerClassName={usersStyles.paginate_container}
            nextClassName={(endOffset === users.length) ? `${usersStyles.paginate_next}` : `${usersStyles.paginate_next} ${usersStyles.paginate_active}`}
            previousClassName={(pageOffset === 0) ? `${usersStyles.paginate_previous}` : `${usersStyles.paginate_previous} ${usersStyles.paginate_active}`}
            activeClassName={usersStyles.paginate_active}
          />
        </div>
      </div>
    </div>
  )
}

export default Users