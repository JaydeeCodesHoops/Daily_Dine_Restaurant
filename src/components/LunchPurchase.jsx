import React from "react";
import '../css/LunchPage.css'

export default function PurchaseLunch(){

    return(
        <>
            <div className="LunchPurchaseContent">
                <div className="burgerAndChips">
                    <h1>Burger and Chips</h1>
                    <img src={{}} alt="Burger and Chips image"/>
                </div>
                <div className="wraps">
                    <h1>Wraps</h1>
                    <img src={{}} alt="Wraps image"/>
                </div>
                <div className="gatsby">
                    <h1>Gatsby's</h1>
                    <img src={{}} alt="gatsby image"/>
                </div>
                <div className="pizza">
                    <h1>Pizza</h1>
                    <img src={{}} alt="pizza image"/>
                </div>
            </div>
        </>
    );
}