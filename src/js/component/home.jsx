import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: "10px" }}>{formatTime(count)}</h2>
        <span>Simple Counter</span>
      </div>
    </div>
  );
};

export default Counter;
