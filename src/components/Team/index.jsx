import React from "react";
import { team } from "../../shared";
import style from "../Team/Team.module.css";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainTeamSection}>
           <div className={style.teamHeding}>
                <h3>Our Team</h3>
           </div>
           <div className={style.teamCard}>
            {
                team.map((item,index)=>{
                    return <TeamCard content={item} key={index}/>
                })
            }
           </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
