import React from "react";
import usersCardStyles from "./userscard.module.scss";

interface CardProps {
  title: string,
  value: string | number,
  img: string,
}

const UsersCard = ({ title, value, img }: CardProps) => {
  return (
    <div className={usersCardStyles.userscard_container}>
      <img src={img} alt={`icon for ${title}`} />
      <p>{title}</p>
      <span>{value}</span>
    </div>
  )
}

export default UsersCard