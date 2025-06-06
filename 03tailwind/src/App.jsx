import React, { useState } from "react";
import Props from "./components/Propstemp";  

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3 className="bg-amber-950">serendipitous</h3>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="/img/cover.png" // Make sure this image exists or update the path
          />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span className="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
      <Props username = 'samantha' gender = 'female' />
      <Props username = 'abhinavShauraya' gender = 'male' />
    </>
  );
}

export default App;
