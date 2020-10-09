import React from 'react';
import './App.css';
import LogoTitle from './Components/LogoTitle';
import MainText from './Components/MainText';
import InputButton from './Components/InputButton';
import SubText from './Components/SubText'

function App() {
  return (
    <div className="App">
      <LogoTitle />
      <MainText />
      <InputButton />
      <SubText />
    </div>
  );
}

export default App;
