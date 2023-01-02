import React from "react";
import logo from "../../assets/img/logo.png";
import logoIcon from "../../assets/img/logo_icon.png";
import bellIcon from "./assets/bell_icon.svg";
import profileImage from "./assets/profile_image.png";
import arrowIcon from "./assets/arrow_icon.svg";
import SearchBar from "../SearchBar";
import topNavStyles from "./topnav.module.scss";

const TopNav = () => {
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const handleDropDown: () => void = () => {
    const newDisplay: string = dropDownRef.current?.style.display === "flex" ? "none" : "flex";
    dropDownRef.current && (dropDownRef.current.style.display = newDisplay);
  }

  return (
    <div className={topNavStyles.nav_container}>
      <div className={topNavStyles.hamburger} role="button" onClick={handleDropDown}>
        <div />
        <div />
        <div />
      </div>
      <div className={topNavStyles.mobile_dropdown} ref={dropDownRef}>
        <div className={topNavStyles.searchbar}>
          <SearchBar />
        </div>
        <a href="/">Docs</a>
        <div className={topNavStyles.account_div}>
          <img className={topNavStyles.profile_img} src={profileImage} alt="user profile" />
          <div className={topNavStyles.user_div}>
            <p>Ayodeji</p>
            <img src={arrowIcon} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className={topNavStyles.logo_img}>
        <img src={logo} alt="lendsqr logo" />
        <img src={logoIcon} alt="lendsqr logo icon" />
      </div>
      <div className={topNavStyles.searchbar}>
        <SearchBar />
      </div>
      <div className={topNavStyles.nav_div}>
        <a href="/">Docs</a>
        <img className={topNavStyles.bell_icon} src={bellIcon} alt="bell icon" />
        <div className={topNavStyles.account_div}>
          <img className={topNavStyles.profile_img} src={profileImage} alt="user profile" />
          <div className={topNavStyles.user_div}>
            <p>Ayodeji</p>
            <img src={arrowIcon} alt="arrow icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav