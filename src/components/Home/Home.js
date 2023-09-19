import React, {useEffect, useState} from "react";
// import "./App.css";
import "./home.css"
import Weather from "../WeatherApp/Weather";
import NewsApp from "../NewsApp/NewsApp";
import Search from "../Search/search";
import Events from "../Events/Events";
function Home() {
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
    <div className="home">
      <div className="homeNew">
        <Search handleUpdate={handleUpdate} updateLoader = {updateLoader}/>
        {/* <div style={{display: "flex", justifyContent: "space-between", width: "88%"}}>
          {<Weather  loader ={loader} data = {data}/>}
          <NewsApp />
        </div> */}
        <Events />
      </div>
      
    </div>
  );
}

export default Home;