import React from 'react';
import "./App.css"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Signup from './myComponents/Signup';
import Login from './myComponents/Login';
import Dashboard from './myComponents/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path='/dashboard' element = {<Dashboard/>} />  
          <Route path="/" element = {<Login/>} />
          <Route path="/signup" element = {<Signup/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
