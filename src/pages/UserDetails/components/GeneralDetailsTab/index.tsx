import React from "react";
import DetailCard from "./components/DetailCard";
import generalDetailsTabStyles from "./generaldetailstab.module.scss";

const GeneralDetailsTab = () => {
  return (
    <div className={generalDetailsTabStyles.generaldetails_div}>
      <div className={generalDetailsTabStyles.section_div}>
        <h4>Personal Information</h4>
        <div>
          <DetailCard title="Full Name" detail="Grace Effiom" />
          <DetailCard title="Phone Number" detail="07060780922" />
          <DetailCard title="Email Address" detail="grace@gmail.com" />
          <DetailCard title="BVN" detail="07060780922" />
          <DetailCard title="Gender" detail="Female" />
          <DetailCard title="Marital Status" detail="Single" />
          <DetailCard title="Children" detail="None" />
          <DetailCard title="Type of Residence" detail="Parent’s Apartment" />
        </div>
      </div>
      <div className={generalDetailsTabStyles.section_div}>
        <h4>Education and Employment</h4>
        <div>
          <DetailCard title="level of education" detail="B.Sc" />
          <DetailCard title="employment status" detail="Employed" />
          <DetailCard title="sector of employment" detail="FinTech" />
          <DetailCard title="Duration of employment" detail="2 years" />
          <DetailCard title="office email" detail="grace@lendsqr.com" />
          <DetailCard title="Monthly income" detail="₦200,000.00- ₦400,000.00" />
          <DetailCard title="loan repayment" detail="40,000" />
        </div>
      </div>
      <div className={generalDetailsTabStyles.section_div}>
        <h4>Socials</h4>
        <div>
          <DetailCard title="Twitter" detail="@grace_effiom" />
          <DetailCard title="Facebook" detail="Grace Effiom" />
          <DetailCard title="Instagram" detail="@grace_effiom" />
        </div>
      </div>
      <div className={generalDetailsTabStyles.section_div}>
        <h4>Guarantor</h4>
        <div>
          <DetailCard title="full Name" detail="Debby Ogana" />
          <DetailCard title="Phone Number" detail="07060780922" />
          <DetailCard title="Email Address" detail="debby@gmail.com" />
          <DetailCard title="Relationship" detail="Sister" />
        </div>
      </div>
    </div>
  )
}

export default GeneralDetailsTab