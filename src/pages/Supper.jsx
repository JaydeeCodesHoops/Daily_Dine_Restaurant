import React from "react";
import Head from "../headers/OtherPagesHeader";
import HomeFoot from "../footers/OtherPagesFooter";
import PurchaseBreakfast from "../components/SupperPurchase";
import "../css/SupperPage.css"

export default function Breakfast(){
    return(
        <>
        <div>
            <Head/>
        </div>
        <div className="supperpageBG">
            <div className="supperpageContent1">
                <PurchaseBreakfast/>
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