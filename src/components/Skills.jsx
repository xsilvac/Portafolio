import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";

const Skills = ({ skill, percent, image }) => {
  return (
    <div>
      <div id="circleProgress">
        <CircularProgressbarWithChildren
          value={percent}
          styles={buildStyles({
            pathColor: `rgba(131, 148, 185, ${99 / 100})`,
            trailColor: "#D7B5BD",
          })}
        >
          <div id="titleGrafic">
            <strong>{skill}</strong>
            <br />
          </div>
          <img className="skillsName" src={image} alt="" />
          <div style={{ fontSize: 20, marginTop: -5 }}>
            <strong>{percent}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Skills;
