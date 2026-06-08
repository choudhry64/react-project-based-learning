import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Welcome this is my first react project</h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase </button>
      <button onClick={decrease}>Decrease </button>
    </>
  );
}

export default App;
