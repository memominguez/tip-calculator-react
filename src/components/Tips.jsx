/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Tips = ({ setThisTipRate }) => {
  const tipRates = ["5", "10", "15", "25", "50"];
  const initialActiveIndex = tipRates.indexOf("15");
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [customTip, setCustomTip] = useState("");

  const handleClick = (index) => {
    setCustomTip("");
    setActiveIndex(index);
  };

  function customize() {
    setActiveIndex(null);
  }

  const handleChange = (e) => {
    setCustomTip(e.target.value);
  }; 

  let tipFactor;

  if (activeIndex || activeIndex == 0) {
    tipFactor = +tipRates[activeIndex] / 100;
  } else {
    tipFactor = +customTip / 100;
  }
  
  useEffect(() => {
    setThisTipRate(tipFactor);
  }, [setThisTipRate, tipFactor])  

  return (
    <>
      {tipRates.map((tipRate, index) => (
        <div
          key={index}
          className={index === activeIndex ? "tips active" : "tips"}
          onClick={() => handleClick(index)}
        >
          {tipRate} %
        </div>
      ))}
      <div id="tip-custom">
        <input
          type="number"
          className="tip-custom"
          placeholder="Custom"
          onFocus={customize}
          value={customTip}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Tips;
