import React from "react";
import "./Timer.css";
import Countdown from 'react-countdown';


const Timer = () => {
  return (
    <div className="mt-2 bg p-2">
      <div className="timer mr-4">You will be logged out in <Countdown date={Date.now() + 600000} /></div>
    </div>
  );
};

export default Timer;
