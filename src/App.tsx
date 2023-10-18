import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BoosterItem from "./BoosterItem";

function App() {
  const [count, setCount] = useState(0);
  const [perSecond, setPerSecond] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <div className="left">
        <h1>Money</h1>
        <h2>money: {count}</h2>
        <h5>per second: {perSecond}</h5>
        <div className="money">
          <button className="money-btn" onClick={handleClick}>
            Click
          </button>
        </div>
      </div>
      <div className="right">
        <h1>shop</h1>
        <div className="boosters">
          <ul className="boosters-list">
            <BoosterItem title="shkolnick" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
