
import './App.css';
import React, { useState } from 'react'

function useCounter(initialCount, step) {
  const [count, setCount] = React.useState(initialCount)

  const increment = () => {
    setCount((prevCount) => prevCount + step)
  }

  return [count, increment]
}

function App() {
  const [count1, setCount1] = useCounter(0,1);
  const [count2, setCount2] = useCounter(0,2);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Count: {count1}</h1>
      <button onClick={setCount1}
      >Add 1</button>
      <h1>Count: {count2}</h1>
      <button onClick={setCount2}
      >Add 2</button>
    </div>
  );
}

export default App;
