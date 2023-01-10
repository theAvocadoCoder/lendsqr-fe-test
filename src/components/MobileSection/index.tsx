import React from "react";
import useWindowSize from "../hooks/useWindowSize";

import SearchBar from "../SearchBar";

import mobileSectionStyles from "./mobilesection.module.scss";
import bellIcon from "./assets/bell_icon.svg";
import profileImage from "./assets/profile_image.png";
import arrowIcon from "./assets/arrow_icon.svg";

const MobileSection = () => {
  const windowSize = useWindowSize();

  return (
    <div className={
      windowSize.innerWidth >= 1024
        ? mobileSectionStyles.mobilesection_container
        : mobileSectionStyles.mobile_dropdown
    }>
      <div className={mobileSectionStyles.searchbar}>
        <SearchBar />
      </div>
      <div className={mobileSectionStyles.nav_div}>
        <a href="/">Docs</a>
        <img src={bellIcon} alt="bell icon" />
        <div className={mobileSectionStyles.account_div}>
          <img className={mobileSectionStyles.profile_img} src={profileImage} alt="user profile" />
          <div className={mobileSectionStyles.user_div}>
            <p>Ayodeji</p>
            <img src={arrowIcon} alt="arrow icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSection