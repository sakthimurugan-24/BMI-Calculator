import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Bmiform() {
    const[weight , setWeight]= useState("");
    const[height , setHeight]= useState("");
   

    const navigate = useNavigate();
    const Calculation =()=>{

         if(weight === "" || height === ""){
        alert("Please enter all details");
        return;
    }
         let heightm = height/100;

        let  bmi = weight / (heightm * heightm);
        let ans= bmi.toFixed(2);
        let result = "";

        if(ans<18.5){
          result = "Under Weight";
        }
        else if(ans>=18.5 && ans<=24.9){
          result = "Healthy Weight";
        }
        else if(ans>=25.0 && ans<=29.9){
          result = "Over Weight";
        }
        else{
          result = "Obese";
        }
        navigate("/result", {
      state: {
        bmi: ans,
        result: result
      }
    });
    }

  return (
    <div className="container">
      <h2>BMI CALCULATOR</h2>

      <p>Enter a Weight(in kg)</p>
      <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} />
      <p>Enter a Height(in cm)</p>
      <input type = "number" value={height} onChange={(e)=>setHeight(e.target.value)}/> <br></br>

      <button onClick={Calculation}>Submit</button>
       

    </div>
  )
}

export default Bmiform
