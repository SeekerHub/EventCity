import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Weather from "./components/WeatherApp/Weather";
import NewsApp from "./components/NewsApp/NewsApp";
import Search from "./components/Search/search";
import NavApp from "./components/NavBar.js/NavApp";
import Home from "./components/Home/Home";
// import NavBarComp from "./components/NavBarComp";
// import Navbar from "./components/NavBar.js/NavBarComp";
function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true)
  useEffect(() => {

  }, [loader])
  const updateLoader = (st) => {
    setLoader(st);
  }
  const handleUpdate = (dt) => {
    setData(dt);
  }
  return (
    <BrowserRouter>
        <NavApp />
        <Home />
    </BrowserRouter>
  );
}

export default App;
