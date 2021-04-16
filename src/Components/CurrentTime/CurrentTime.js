import React from "react";

const CurrentTime = () => {
  const Now = new Date();
  const Day = `${Now.getDate()}`.padStart(2, 0);
  const Month = `${Now.getMonth() + 1}`.padStart(2, 0);
  const Year = Now.getFullYear();
  const Hour = Now.getHours();
  const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
  return (
    <div>
      <h6 className="time-color">{`As of ${Month}/${Day}/${Year}, ${Hour}:${Minutes}`}</h6>
    </div>
  );
};

export default CurrentTime;
