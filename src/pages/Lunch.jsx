import React from "react";
import Head from "../headers/OtherPagesHeader";
import HomeFoot from "../footers/OtherPagesFooter";
import PurchaseLunch from "../components/LunchPurchase";
import "../css/BreakfastPage.css"

export default function Breakfast(){
    return(
        <>
        <div>
            <Head/>
        </div>
        <div className="lunchpageBG">
            <div className="lunchpageContent1">
                <PurchaseLunch/>
            </div>
            <div className="breakfastpageContent2">
                <h1>AWE</h1>
            </div>
        </div>
        <div>
            <HomeFoot/>
        </div>
        </>
    );
}