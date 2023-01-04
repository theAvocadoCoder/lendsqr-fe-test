import React from "react";
import usersStyles from "./users.module.scss";
import UsersCard from "./components/UsersCard";
import FilterDropdown from "./components/FilterDropdown";
import TableEntry from "./components/TableEntry";
import usersIcon from "./assets/users.svg";
import activeUsersIcon from "./assets/active_users.svg";
import usersWithLoansIcon from "./assets/users_with_loans.svg";
import usersWithSavingsIcon from "./assets/users_with_savings.svg";
import filterIcon from "./assets/filter_icon.svg";
import dateFormat from "dateformat";

const userData = {
  orgName: "Lendsqr",
  firstName: "Adedeji",
  email: "adedeji@gmail.com",
  phoneNumber: "12340987456",
  createdAt: dateFormat(new Date(), "mmm d, yyyy, h:MM TT"),
  activeStatus: "active",
  id: 1,
}

const Users = () => {
  const filterDropdownDiv = React.useRef<HTMLDivElement>(null);

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
            <TableEntry userData={userData} />
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