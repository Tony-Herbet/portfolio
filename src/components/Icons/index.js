import React from 'react';

import { Square, X, Minus } from 'react-feather';
import './icons.scss';

const Icons = () => (
  <div className="icons-container">
    <div className="icon-container">
      <Minus className="icon" />
    </div>
    <div className="icon-container">
      <Square className="icon" />
    </div>
    <div className="icon-container icon-x">
      <X className="icon" />
    </div>
  </div>
);

export default Icons;
