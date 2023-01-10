import React from "react";

import logo from "../../assets/img/logo.png";
import logoIcon from "../../assets/img/logo_icon.png";
import topNavStyles from "./topnav.module.scss";

import MobileSection from "../MobileSection";
import type { MobileSectionProps } from "../../App";

const TopNav = ({ mobileNavIsOpen, setMobileNavIsOpen }: MobileSectionProps) => {

  return (
    <div className={topNavStyles.nav_container}>
      <div className={topNavStyles.hamburger} role="button" onClick={() => {
        if (setMobileNavIsOpen) setMobileNavIsOpen(!mobileNavIsOpen);
      }}>
        <div />
        <div />
        <div />
      </div>
      <div className={topNavStyles.logo_img}>
        <img src={logo} alt="lendsqr logo" />
        <img src={logoIcon} alt="lendsqr logo icon" />
      </div>
      <div className={topNavStyles.mobilesection_div}>
        <MobileSection />
      </div>
    </div>
  )
}

export default TopNav