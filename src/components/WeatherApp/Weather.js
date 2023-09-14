import React, { useEffect, useState } from "react";
// import Loader from './Loader'
import {TailSpin} from "react-loader-spinner";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [loader, setLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  
  const [form, setForm] = useState({
    city: "",
    // country: "",
  });
  useEffect(() => {

  }, [loader])
  const APIKEY = "fe4feefa8543e06d4f3c66d92c61b69c";
  
  async function weatherData(e) {
    e.preventDefault();
    setSubmit(true);
    setLoader(true);
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
      setLoader(false);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    // if (name === "country") {
    //   setForm({ ...form, country: value });
    // }
  };
  return (
    <div>
      <div className="weather">
        <span className="title">Your City ?</span>
        <br />
        <form>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp;&nbsp;
          {/* <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}
          /> */}
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Submit
          </button>
        </form>

        {/* {console.log(weather)} */}
        
      </div>
      
      { submit? 
        <div className="weatherReport">
          {loader? <div className="loader"><TailSpin /></div> : weather.data ? (
              <div>
                <DisplayWeather data={weather.data} />
              </div>
            ) :  null}
        </div>
        :
        null
      }
    </div>
  );
}

export default Weather;
