import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './component/home';
// import About from './component/about';
// import Contact from './component/contact';
import Home from './components/Home/Home';
import Bookings from './components/Bookings/Bookings';
import './App.css';
import Navbar from './components/NavBar.js/Navbar';  
class App extends Component {
render() {
    return (
    <Router>
        <div className="App">
        <Navbar />
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/bookings' element={< Bookings />}></Route>
                {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
        </div>
    </Router>
);
}
}
  
export default App;