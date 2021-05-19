import React from "react";
import './Button.css'
import { ArrowRight } from 'react-bootstrap-icons';


const WithdrawalButton = () => {
  return (
    <div>
      <div>
        <button className='with-btn'><ArrowRight></ArrowRight></button>
      </div>
    </div>
  );
};

export default WithdrawalButton;