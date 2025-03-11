import React from "react";
import { useNavigate } from "react-router-dom";
import DDine from "../assets/DailyDine.png";
import "../css/OtherPages.css";

export default function HomeHead(){
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate("/");
    };

    return(
        <>
            <div className="otherpagesHeader">
                <img className="OthersLogo" src={DDine} alt="logo"/>
                <h1>Order Here</h1>
                <p className="OthersBackButton" onClick={handleBack}>Back to home</p>
            </div>
        </>
    );
}