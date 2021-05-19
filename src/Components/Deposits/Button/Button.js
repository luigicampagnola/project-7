import React from "react";
import './Button.css'
import { ArrowRight } from 'react-bootstrap-icons';


const DepositButton = () => {
  return (
    <div>
      <div>
        <button className='depo-btn'><ArrowRight></ArrowRight></button>
      </div>
    </div>
  );
};

export default DepositButton;
