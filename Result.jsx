import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function Result() {

    const location = useLocation();

    const navigate = useNavigate();

    const { bmi, result } = location.state;

    return (

        <div className="result-box">

            <h1>BMI RESULT PAGE</h1>

            <h2>Your BMI: {bmi}</h2>

            <h2>Status: {result}</h2>

            {
                result === "Under Weight" && (
                    <img src="https://www.shutterstock.com/shutterstock/photos/1329921086/display_1500/stock-vector-illustration-of-an-underweight-man-in-skin-and-bones-1329921086.jpg" width="300"/>
                )
            }

            {
                result === "Healthy Weight" && (
                    <img src="https://st3.depositphotos.com/6436316/12529/v/950/depositphotos_125297804-stock-illustration-young-man-in-white-shirt.jpg" width="300"/>
                )
            }

            {
                result === "Over Weight" && (
                    <img src="https://img.magnific.com/free-vector/overweight-man-cartoon-character_1308-134504.jpg?semt=ais_hybrid&w=740&q=80" width="300"/>
                )
            }

            {
                result === "Obese" && (
                    <img src="https://t4.ftcdn.net/jpg/00/53/88/55/360_F_53885536_VFeW9gFYjVL9ckyYauItdeTsZSwkcxHx.jpg" width="300"/>
                )
            }
            <br></br>
        <button onClick={() => navigate("/")}>
                Back To Home
            </button>
        </div>
    )
}

export default Result   