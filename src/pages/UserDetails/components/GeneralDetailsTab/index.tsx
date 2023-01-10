import React from "react";
import { useUser } from "../../index";
import DetailCard from "./components/DetailCard";
import generalDetailsTabStyles from "./generaldetailstab.module.scss";

const GeneralDetailsTab = () => {
  const { user } = useUser();

  return (
    user && (
      <div className={generalDetailsTabStyles.generaldetails_div}>
        <div className={generalDetailsTabStyles.section_div}>
          <h4>Personal Information</h4>
          <div>
            <DetailCard title="Full Name" detail={`${user.profile.firstName} ${user.profile.lastName}`} />
            <DetailCard title="Phone Number" detail={user.profile.phoneNumber} />
            <DetailCard title="Email Address" detail={user.email.toLocaleLowerCase()} />
            <DetailCard title="BVN" detail={user.profile.bvn} />
            <DetailCard title="Gender" detail={user.profile.gender} />
            <DetailCard title="Marital Status" detail="Single" />
            <DetailCard title="Children" detail="None" />
            <DetailCard title="Type of Residence" detail="Parent’s Apartment" />
          </div>
        </div>
        <div className={generalDetailsTabStyles.section_div}>
          <h4>Education and Employment</h4>
          <div>
            <DetailCard title="level of education" detail={user.education.level} />
            <DetailCard title="employment status" detail={user.education.employmentStatus} />
            <DetailCard title="sector of employment" detail={user.education.sector} />
            <DetailCard title="Duration of employment" detail={user.education.duration} />
            <DetailCard title="office email" detail={user.email.toLocaleLowerCase()} />
            <DetailCard title="Monthly income" detail={`₦${user.education.monthlyIncome[0]}- ₦${user.education.monthlyIncome[0]}`} />
            <DetailCard title="loan repayment" detail={user.education.loanRepayment} />
          </div>
        </div>
        <div className={generalDetailsTabStyles.section_div}>
          <h4>Socials</h4>
          <div>
            <DetailCard title="Twitter" detail={user.socials.twitter} />
            <DetailCard title="Facebook" detail={user.socials.facebook} />
            <DetailCard title="Instagram" detail={user.socials.instagram} />
          </div>
        </div>
        <div className={generalDetailsTabStyles.section_div}>
          <h4>Guarantor</h4>
          <div>
            <DetailCard title="full Name" detail={`${user.guarantor.firstName} ${user.guarantor.lastName}`} />
            <DetailCard title="Phone Number" detail={user.guarantor.phoneNumber} />
            <DetailCard title="Email Address" detail={user.email.toLocaleLowerCase()} />
            <DetailCard title="Relationship" detail="Sister" />
          </div>
        </div>
      </div>
    )
  )
}

export default GeneralDetailsTab