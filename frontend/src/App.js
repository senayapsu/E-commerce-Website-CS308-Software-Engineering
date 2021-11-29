import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App" 
    style={{
      backgroundColor: 'white',
     
    }}
    >
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
