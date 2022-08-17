import React from "react";

export const SkillCard = (props) => {
  return (
    <div className="skill-card-container">
      <img src={props.vector} alt={props.alt} />
      <p>{props.name}</p>
    </div>
  );
};
