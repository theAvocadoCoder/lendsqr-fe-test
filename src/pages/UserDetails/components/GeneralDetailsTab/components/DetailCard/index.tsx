import React from "react";
import detailCardStyles from "./detailcard.module.scss";

interface DetailCardProps {
  title: string,
  detail: string,
}

const DetailCard = ({title, detail}: DetailCardProps) => {
  return (
    <div className={detailCardStyles.detailcard_container}>
      <p>{title}</p>
      <p>{detail}</p>
    </div>
  )
}

export default DetailCard