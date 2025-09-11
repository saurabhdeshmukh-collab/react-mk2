// src/jsPlayground.js
import React, { useState } from "react";

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Counter =", count);
    return count;
  };
}
const closureCounter = makeCounter();

async function fetchWeather() {
  console.log("1. Start");

  setTimeout(() => console.log("2. Timeout finished (comes later)"), 1000);

  // pune weather api
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=18.5196&longitude=73.8554&current_weather=true"
  );
  const data = await res.json();
  console.log("3. Fetch finished:", data.current_weather);

  console.log("4. End");
  return data.current_weather;
}

export default function JsPlayground() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState(null);

  return (
    <div style={page}>
      <h1 style={h1}>Day 2 – Closures & Async/Await</h1>

      {}
      <section style={card}>
        <h2>1. Closure Counter</h2>
        <pre style={pre}>{`function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2`}</pre>
        <button
          style={btn}
          onClick={() => setCount(closureCounter())}
        >
          Increment
        </button>
        <output style={out}>Counter value: {count}</output>
      </section>

      //
      <section style={card}>
        <h2>2. Async/Await Demo</h2>
        <pre style={pre}>{`async function fetchWeather() {
  console.log("1. Start");
  setTimeout(() => console.log("2. Timeout finished"), 1000);
  const res = await fetch("weather api url");
  const data = await res.json();
  console.log("3. Fetch finished:", data);
  console.log("4. End");
}`}</pre>
        <button
          style={btn}
          onClick={async () => {
            const w = await fetchWeather();
            setWeather(w);
          }}
        >
          Fetch Weather (Pune)
        </button>
        <output style={out}>
          {weather
            ? `Temp: ${weather.temperature}°C, Windspeed: ${weather.windspeed} km/h`
            : "Click to fetch"}
        </output>
        <p>Check console → order of logs shows event loop in action</p>
      </section>
    </div>
  );
}

const page = {
  maxWidth: 680,
  margin: "40px auto",
  padding: "0 20px",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.6,
};
const h1 = { fontSize: "1.5rem", marginBottom: "2rem" };
const card = {
  border: "1px solid #e5e5e5",
  borderRadius: 6,
  padding: "1rem 1.25rem",
  marginBottom: "1.2rem",
};
const pre = {
  background: "#f6f8fa",
  padding: "8px 12px",
  borderRadius: 4,
  fontSize: "0.85rem",
  overflowX: "auto",
};
const out = {
  display: "block",
  marginTop: "0.5rem",
  fontSize: "0.9rem",
  color: "#0550ae",
};
const btn = {
  padding: "6px 12px",
  marginTop: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: 4,
  cursor: "pointer",
  background: "#f8f8f8",
};
