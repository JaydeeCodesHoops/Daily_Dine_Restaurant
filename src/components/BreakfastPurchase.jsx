import React, { useState } from "react";
import coffee from "../../src/assets/coffee.jpg";
import { useNavigate } from "react-router-dom";
import '../css/BreakfastPage.css'

export default function PurchaseBreakfast() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            if (count - 1 === 0) {
                setMessage(""); 
            }
        } else {
            setMessage("You can't have negative coffee! 🤣☕️");
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
        if (message) {
            setMessage("");  // Clear message if they add coffee
        }
    };

    return (
        <>
                {/* <div className="breakfastPurchaseContent">
                    <h2>Coffee</h2>
                    <img src={coffee} alt="coffee" style={{ width: "200px", height: "200px" }} />
                    <div>
                        <button onClick={handleDecrement}> - </button>
                        {count}
                        <button onClick={handleIncrement}> + </button>
                    </div>
                    {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
                </div> */}
            <div className="breakfastPurchaseContent">
                <div className="baconAndEggs">
                    <h1>Bacon and Eggs</h1>
                    <img src={{}} alt="bacon and eggs image"/>
                </div>
                <div className="mousleyAndYogurt">
                    <h1>Mousley and Yogurt</h1>
                    <img src={{}} alt="bacon and eggs image"/>
                </div>
                <div className="healthyCereal">
                    <h1>Healthy Cereal</h1>
                    <img src={{}} alt="bacon and eggs image"/>
                </div>
            </div>
        </>
    );
}