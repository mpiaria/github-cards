import "./Card.css";
import React, { FC } from "react";
import ProfileProps from "../types/ProfileProps";

const Card: FC<ProfileProps> = (props) => {
  return (
    <div className="github-profile">
      <img alt="GitHub avatar" src={props.avatar_url} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
    </div>
  );
};

export default Card;
