import React from "react";
import ReactPlayer from "react-player";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactPlayer url="https://www.youtube.com/watch?v=CahOLfYxiq0" />;
    </>
  );
}

export default App;
