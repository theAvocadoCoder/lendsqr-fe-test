import React from "react";
import usersStyles from "./users.module.scss";
import UsersCard from "./components/UsersCard";
import usersIcon from "./assets/users.svg";
import activeUsersIcon from "./assets/active_users.svg";
import usersWithLoansIcon from "./assets/users_with_loans.svg";
import usersWithSavingsIcon from "./assets/users_with_savings.svg";
import filterIcon from "./assets/filter_icon.svg";
import moreIcon from "./assets/more_icon.svg";

const Users = () => {
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
            <tr>
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
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>
                <span className={usersStyles.inactive}>
                  Inactive
                </span>
              </td>
              <td>
                <img src={moreIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>
                <span className={usersStyles.active}>
                  Active
                </span>
              </td>
              <td>
                <img src={moreIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>
                <span className={usersStyles.pending}>
                  Pending
                </span>
              </td>
              <td>
                <img src={moreIcon} alt="" />
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>
                <span className={usersStyles.blacklisted}>
                  Blacklisted
                </span>
              </td>
              <td>
                <img src={moreIcon} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div>
        <div>
          <p>
            Showing
            <div>
              100
              <img src="" alt="" />
            </div>
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