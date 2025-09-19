import React, { useState, useEffect, useCallback } from "react";

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function JsPlayground() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debouncedFetch = useCallback(
    debounce(async (q) => {
      if (!q) {
        setResults([]);
        return;
      }
      const res = await fetch(`https://dummyjson.com/products/search?q=${q}`);
      const data = await res.json();
      setResults(data.products || []);
      console.log("Fetched results for:", q, data.products);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetch(query);
  }, [query, debouncedFetch]);

  const items = ["Saurabh", "Sudarshan", "Krishna", "Surya", "Pawan"];

  const handleListClick = (e) => {
    if (e.target.tagName === "LI") {
      alert(`You clicked on: ${e.target.innerText}`);
    }
  };
  return (
    <div style={page}>
      <h1 style={h1}>Day 3 – Advanced JS for React</h1>

      {/* Debounced Search */}
      <section style={card}>
        <h2>1. Debounced Search (Dummy API)</h2>
        <pre style={pre}>{`const debouncedFetch = debounce(fetchFn, 400);
<input onChange={(e) => setQuery(e.target.value)} />`}</pre>
        <input
          style={input}
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {results.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
        <p style={note}>
          Try typing fast — fetch only happens after you pause for 500ms.
        </p>
      </section>

      {/* Event Delegation */}
      <section style={card}>
        <h2>2. Event Delegation</h2>
        <pre style={pre}>{`<ul onClick={handleListClick}>
  <li>Suarabh</li>
  <li>Surya</li>
</ul>`}</pre>
        <ul style={list} onClick={handleListClick}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p style={note}>
          Only ONE click listener is attached (on the &lt;ul&gt;), not on each
          &lt;li&gt;.
        </p>
      </section>
    </div>
  );
}
// gpt aesthetics fluff
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
const input = {
  padding: "6px 10px",
  marginTop: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: 4,
  width: "100%",
};
const list = {
  marginTop: "0.5rem",
  border: "1px solid #ddd",
  borderRadius: 4,
  padding: "0.5rem",
};
const note = { fontSize: "0.85rem", color: "#555", marginTop: "0.5rem" };
