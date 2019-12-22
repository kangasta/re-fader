import React, { useState, useEffect } from 'react';

import { Fader, Changer } from 're-fader';

import './App.css';

const App: React.FC = () => {
  const [i, setI ] = useState<number>(0)

  useEffect(() => {
    const id = setInterval(() => setI(prev => (prev + 1)), 2500);
    return () => clearInterval(id);
  }, [])

  return (
    <div className="App">
      <Fader>Show</Fader>
      <Fader scaling='xy'>Scaled Show</Fader>
      <Fader visibility='hide'>Hide</Fader>
      <Fader scaling='xy' visibility='hide'>Scaled Hide</Fader>
      <Fader visibility='none'>None</Fader>
      <Changer scaling='y'>{i}</Changer>
      <Changer>{i}</Changer>
    </div>
  );
}

export default App;
