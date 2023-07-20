
import './App.css';
import React, { useState } from 'react'



function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div style={{textAlign:'center'}}>
      <h1>Count: {count1}</h1>
      <button onClick={() =>{
          setCount1((previous) => previous + 1);
        }}
      >Add 1</button>
      <h1>Count: {count2}</h1>
      <button onClick={() =>{
          setCount2((previous) => previous + 2);
        }}
      >Add 2</button>
    </div>
  );
}

export default App;
