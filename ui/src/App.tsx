import React from 'react';
import './App.css';
import Results from './features/Results';
import AddResult from './features/AddResult';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AddResult />
      </header>
      <Results />
    </div>
  );
}

export default App;
