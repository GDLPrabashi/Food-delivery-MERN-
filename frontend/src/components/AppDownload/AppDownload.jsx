import React from 'react';
import "./AppDownload.css";
import {assets} from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
      <p>For Better Experience Download<br/> Tomato App</p>
        <div className="app-donwload-platform">
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}

export default AppDownload
