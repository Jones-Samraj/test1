// App.jsx
import React, { useState } from "react";
import "./App.css"; // Import CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Welcome to My Sample React App</h1>
      <p className="subtitle">Deployed on GitHub Pages 🚀</p>

      <p>You clicked {count} times</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
