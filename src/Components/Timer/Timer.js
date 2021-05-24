import React from "react";
import "./Timer.css";
import Countdown from "react-countdown";
import ModalComponent from "../ModalComponent/ModalComponent";

const Timer = () => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <ModalComponent />;
    } else {
      return (
        <div>
          {minutes}:{seconds}
        </div>
      );
    }
  };
  return (
    <div className="mt-2 bg p-2">
      <div className="timer mr-4 d-flex">
        You will be logged out in{" "}
        <div className='ml-1 '>
          <Countdown date={Date.now() + 650000} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
