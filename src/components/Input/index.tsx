import React from 'react';
import './input.scss'
import fileIcon from "../../pages/index/fileIcon.png";

export const Input = () => {
  return (
    <div className={'footer'}>
      <input type="text" className={'inputText'} placeholder={'Type message'}/>
      <div className={'footerButtons'}>
        <label htmlFor={'fileInput'}>
          <img src={fileIcon} alt="fileIcon" className={'fileUpload'}/>
        </label>
        <input id='fileInput' type="file" style={{display: 'none'}}/>
        <button className={'sendButton'}></button>
      </div>
    </div>
  );
};
