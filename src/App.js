import React from 'react';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Display from './Components/Display/Display'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex'}}>
      <Sidebar/>
      <Display/>
      </div>
    </div>
  );
}



export default App;
