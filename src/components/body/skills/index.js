import React from "react";
import Seperator from "../../common/social-contact/seperator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import "./skill.css";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator></Seperator>
      <label className="section-title"> Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skill-section-title">{item.type}</label>
              <div className="skills-list"> 
                  {item.list.map((skill)=>{
                    return(

                      <SkillCard skill = {skill} />

                    )
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
