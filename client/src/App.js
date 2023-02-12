import './App.css';
import React from 'react';
import logo from '../assets/spiderman-logo.png';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Series from './pages/WatchSeries/Series';
import Movies from './pages/WatchMovies/Movies';



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} alt='logo spiderman' />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={ <Series />} />
        <Route path="/Series/:id" element={<Series />} /> 
        <Route path="*" element={<h1>404 - Not Found!</h1>} />
        <Route path="/Movies" element ={<Movies />} />
        <Route path="/Movies/:id" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
