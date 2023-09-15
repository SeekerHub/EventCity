import React, { useEffect, useState } from "react";
// import Loader from './Loader'
import {TailSpin} from "react-loader-spinner";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather(props) {
  
  return (
    <div>
      {
        <div className="weatherReport">
          {props.loader? <div className="loader"><TailSpin /></div> : props.data ? (
              <div>
                <DisplayWeather data={props.data} />
              </div>
            ) :  null}
        </div>
      }
    </div>
  );
}

export default Weather;
