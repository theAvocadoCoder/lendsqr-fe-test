import React from "react";
import filterDropdownStyles from "./filterdropdown.module.scss";
import arrowIcon from "../../assets/arrow_icon.svg";
import calendarIcon from "../../assets/calendar_icon.svg";

const FilterDropdown = () => {
  function handleFocus(e: React.ChangeEvent<HTMLInputElement>) {
    e.currentTarget.type = "date";
  }
  
  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    e.currentTarget.type = "text";
  }

  return (
    <div className={filterDropdownStyles.filterdropdown_container}>
      <form onSubmit={(e)=> {e.preventDefault()}}>
        <label htmlFor="organization">
          <p>Organization:</p>
          <div className={filterDropdownStyles.select_div}>
            <select name="orgName" id="organization">
              <option value="" className={filterDropdownStyles.default_select}>Select</option>
              <option value="lendsqr">Lendsqr</option>
              <option value="irorun">Irorun</option>
            </select>
            <span>
              <img src={arrowIcon} alt="" />
            </span>
          </div>
          
        </label>
        <label htmlFor="username">
          <p>Username:</p>
          <input type="text" name="userName" id="username" placeholder="Username" />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <label htmlFor="date">
          <p>Date:</p>
          <div className={filterDropdownStyles.date_div}>
            <input type="text" name="date" id="date" placeholder="Date" onFocus={handleFocus} onBlur={handleBlur} />
            <span>
              <img src={calendarIcon} alt="" />
            </span>
          </div>
            
        </label>
        <label htmlFor="phone_number">
          <p>Phone Number:</p>
          <input type="number" name="phoneNumber" id="phone_number" placeholder="Phone Number" />
        </label>
        <label htmlFor="status">
          <p>Status:</p>
          <div className={filterDropdownStyles.select_div}>
            <select name="status" id="status">
              <option value="" className={filterDropdownStyles.default_select}>Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
            <span>
              <img src={arrowIcon} alt="" />
            </span>
          </div>
        </label>

        <div>
          <button type="reset">Reset</button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </div>
  )
}

export default FilterDropdown