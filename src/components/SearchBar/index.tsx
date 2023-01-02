import React from "react";
import searchIcon from "./assets/search_icon.svg";
import searchBarStyles from "./searchbar.module.scss";

const SearchBar = () => {
  return (
    <div className={searchBarStyles.searchbar_container}>
      <form role="search">
        <input type="search" placeholder="Search for anything" />
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar