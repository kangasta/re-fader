import React from 'react';

import { Fader } from 're-fader';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Fader>Show</Fader>
      <Fader scaling='xy'>Scaled Show</Fader>
      <Fader visibility='hide'>Hide</Fader>
      <Fader scaling='xy' visibility='hide'>Scaled Hide</Fader>
      <Fader visibility='none'>None</Fader>
    </div>
  );
}

export default App;
