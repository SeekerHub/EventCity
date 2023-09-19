import React, { useEffect, useState } from "react";
// import Loader from './Loader'
// import {TailSpin} from "react-loader-spinner";
// import DisplayWeather from "./DisplayWeather";
import "./weather.css";

export default function Search(props){
  
  const [form, setForm] = useState({
    city: "Kolkata",
    // country: "",
  });
  useEffect(() => {
    weatherData();
  }, [])
  const APIKEY = "fe4feefa8543e06d4f3c66d92c61b69c";
  
  async function weatherData(e) {
    e.preventDefault();
    // setSubmit(true);
    props.updateLoader(true);
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
        props.handleUpdate(data);
        props.updateLoader(false);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
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

      </div>
    </div>
    )
}