import React, {useEffect, useState} from "react";
import "./App.css";
import Weather from "./components/WeatherApp/Weather";
import NewsApp from "./components/NewsApp/NewsApp";
import Search from "./components/Search/search";
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
    <div className="App">
      <div className="AppNew">
        <Search handleUpdate={handleUpdate} updateLoader = {updateLoader}/>
        <div style={{display: "flex", justifyContent: "space-between", width: "88%"}}>
          <Weather  loader ={loader} data = {data}/>
          <NewsApp />
        </div>
      </div>
      
    </div>
  );
}

export default App;
