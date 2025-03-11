import React from "react";
import HomeHead from "../headers/HomeHeader";
import HomeFoot from "../footers/HomeFooter";
import FoodChoices from "../components/eatingChoices.jsx";
import "../css/HomePage.css"

export default function Home(){
    return(
        <>
        <div>
            <HomeHead/>
        </div>
        <div className="homepageBG">
            <div className="homepageContent1">
                <FoodChoices/>
            </div>
            <div className="homepageContent2">
                <h1>Enjoy the Order, To enjoy the Bite</h1>
            </div>
        </div>
        <div>
            <HomeFoot/>
        </div>
        </>
    );
}