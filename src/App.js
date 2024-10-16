import React from 'react';
import Home from './Home'
import Features from './Features'
import About from './About'
import Tokenmonics from './Tokenomics';
import RoadMap from './RoadMap';
import Explore from './Explore';
import './App.css';

const App = () => {
  return (
    <div className="App">
      
      <Home />
      <Features/>
      <About/>
      <Tokenmonics/>
      <RoadMap/>
      <Explore/>
     
    </div>
  );
}

export default App;
