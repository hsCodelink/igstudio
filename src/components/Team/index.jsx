import React from "react";
import { team } from "../../shared";
import style from "../Team/Team.module.css";
import Card from "./TeamCard";
import { cardDetails } from "../../shared";

const Team= () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainTeamSection}>
           <div className={style.teamHeding}>
                <h3 className="heading">Our Team</h3>
           </div>
           <div className={style.teamCard}>
            {
                cardDetails.map((item,index)=>{
                    return <Card content={item} key={index}/>
                })
            }
           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
