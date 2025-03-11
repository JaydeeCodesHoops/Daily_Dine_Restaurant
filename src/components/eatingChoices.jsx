import React from "react";
import { useNavigate } from "react-router-dom";
import breakfast from "../assets/breakfast.jpg";
import lunch from "../assets/lunch.jpg";
import supper from "../assets/supper.jpg";
import "../css/HomePage.css";

export default function FoodChoices(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/breakfast");
    };

    const handleClickLunch = () => {
        navigate('/lunch');
    };

    const handleClickSupper = () => {
        navigate('/supper');
    };

    return(
        <>
            <div className="foodChoices">
                <div className="breakfast" onClick={handleClick}>
                    <img className="breakfastImage" src={breakfast} alt="breakfast-image"/>
                    <h1>Breakfast</h1>
                </div>
                <div className="lunch" onClick={handleClickLunch}>
                    <img className="lunchImage" src={lunch} alt="lunch-image"/>
                    <h1>Lunch</h1>
                </div>
                <div className="supper" onClick={handleClickSupper}>
                    <img className="supperImage" src={supper} alt="supper-image"/>
                    <h1>Supper</h1>
                </div>
            </div>
        </>
    );
}