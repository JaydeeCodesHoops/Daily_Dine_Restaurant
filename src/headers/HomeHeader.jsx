import React from "react";
import DDine from "../assets/DailyDine.png"

export default function HomeHead(){
    return(
        <>
            <div className="homepageHeader">
                <img className="HeadLogo" src={DDine} alt="logo"/>
                <div className="headerText">
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Mail us</p>
                </div>
            </div>
        </>
    );
}