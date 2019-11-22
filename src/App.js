import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './container/MainContainer';
import MainCnfgContainer from './ConfigureNewBug/MainCnfgContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainCnfgContainer></MainCnfgContainer>
        { /* <MainContainer></MainContainer>--> */}
      </header>
    </div>
  );
}

export default App;
