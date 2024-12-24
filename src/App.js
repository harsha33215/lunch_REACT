import "./App.css";
import { useState } from "react";

export default function App() {
  const [lunch, setLunch] = useState(null);

  function lunchToday(choice) {
    setLunch(choice);
  }

  return (
    <div className="App">
      <h1 className="topic">Click if you Had Lunch?</h1>
      <div>
        <button
          onClick={() => lunchToday(true)}
          className="heading"
          style={{
            backgroundColor: lunch === true ? "green" : "white",
            color: lunch === true ? "white" : "black",
          }}
        >
          Had you Lunch?
        </button>

        <button
          onClick={() => lunchToday(false)}
          className="heading"
          style={{
            backgroundColor: lunch === false ? "red" : "white",
            color: lunch === false ? "white" : "black",
          }}
        >
          No I haven't had lunch
        </button>
      </div>
    </div>
  );
}
