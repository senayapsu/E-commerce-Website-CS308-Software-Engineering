import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import background from './assets/soft.jpg';
function App() {
  return (
    <div className="App" 
    style={{
      //backgroundColor: 'white',
      backgroundImage:`url(${background})`,
    }}
    >
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
