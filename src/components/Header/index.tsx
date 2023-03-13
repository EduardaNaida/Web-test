import React from 'react';
import dialogsIcon from "../../pages/index/Shape.png";
import './header.scss'

export const Header = () => {
  return (
    <div className={'header'}>
      <div className={'dialogsIcon'}><img src={dialogsIcon} alt="dialogsIcon"/></div>
      <div className={'headerName'}>
        <h4>Great Project</h4>
      </div>
    </div>
  );
};
