import React from 'react';

import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  MoreVertical,
  Star,
  Lock,
} from 'react-feather';
import { useLocation } from 'react-router-dom';
import Icons from '../Icons';
import Page from '../Page';
import './browser.scss';

const Browser = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div className="browser-container">
      <div className="browser-header">
        <div className="browser-name">
          <div className="name">
            Portfolio - Navigateur
          </div>
        </div>
        <Icons />
      </div>
      <div className="browser-window">
        <div className="browser-window_nav">
          <div className="nav-icons">
            <ArrowLeft className="nav-arrow icon" />
            <ArrowRight className="nav-arrow icon" />
            <RotateCw className="icon" />
          </div>
          <div className="adressBar">
            <Lock className="icon" />
            <p className="url">
              https://portfolio{url}
            </p>
            <Star className="icon icon-star" />
          </div>
          <MoreVertical className="icon" />
        </div>
        <Page />
      </div>
    </div>
  );
};

export default Browser;
