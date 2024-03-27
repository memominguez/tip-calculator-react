/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import Tips from "./components/Tips";
import "./App.css";

function App() {
  const [thisTipRate, setThisTipRate] = useState(0.0) 
  const [bill, setBill] = useState("")
  const [peopleNum, setPeopleNum] = useState(1) 

  let tipAmount = +bill * thisTipRate
  let billTotal = +bill + tipAmount

  let tipPerPerson = (tipAmount / peopleNum).toFixed(2)
  let personsPay = (billTotal / peopleNum).toFixed(2)  

  function reset() {
    setBill("")
    setPeopleNum(1)
  }  
 
  return (
    <>
      <header className="logo">
        <img src={logo} alt="" />
      </header>
      <main className="tip-calculator">
        <section className="partOne">
          <label htmlFor="">Bill</label>
          <input 
            type="number" 
            className="input bill-input" 
            // id="bill-input" 
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}           
            />
          <label htmlFor="">Select Tip%</label>
          <div className="tip">
            <Tips thisTipRate={thisTipRate} setThisTipRate={setThisTipRate}/>
          </div>

          <div className="peopleLabel">
            <label htmlFor="">Number of People</label>
            <label 
              htmlFor="" 
              className={peopleNum ? "hidden" : "error"}
            >
                Can&apos;t be zero
              </label>
          </div>
          <input 
            type="number" 
            min="1"
            className="input people-input" 
            placeholder="1"
            value={peopleNum}
            onChange={(e) => setPeopleNum(e.target.value)}           
            />
        </section>

        <section className="result">
          <div className="tip-amount">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="tip-amount">${tipPerPerson}</div>
          </div>

          <div className="total">
            <div className="text">
              <p>Total</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="total-amount">${personsPay}</div>
          </div>

          <div className="reset" onClick={reset}>RESET</div>

        </section>
      </main>
    </>
  );
}

export default App;
