import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-xs">Xsmall</button>
      <button className="btn btn-sm">Small</button>
      <button className="btn">Medium</button>
      <button className="btn btn-lg">Large</button>
      <button className="btn btn-xl">Xlarge</button>
      <h1 className="text-red-600">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
