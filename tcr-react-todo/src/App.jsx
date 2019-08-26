import React from 'react';
import './App.css';
import Form from './Form'

function App() {
  const addItem = (text) => {
  }

  return (
    <div>
      <h1>Pairing Talk Todo</h1>
      <h3>An easy way to sort out your tasks, fast and efficient</h3>
      <Form addItem={addItem} />
    </div>
  );
}

export default App;
