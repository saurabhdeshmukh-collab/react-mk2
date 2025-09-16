// src/App.jsx
import React, { useEffect } from 'react';

function scopeDemo() {
  console.group('var vs let vs const');
  if (true) { var a = 1; let b = 2; const c = 3; console.log({ a, b, c }); }
  console.log('outside block: a =', a);
  try { console.log(b); } catch (e) { console.log('b is gone'); }
  console.groupEnd();
}
function regularFunc() { console.log('regular this =', this); }
const arrowFunc = () => console.log('arrow this =', this);
function namedAdd(a, b) { return a + b; }
const anonAdd = function (a, b) { return a + b; };
const arrowAdd = (a, b) => a + b;

/* ---------- minimalist UI ---------- */
export default function App() {
  useEffect(() => {
    scopeDemo();
    regularFunc.call({ id: 1 });
    arrowFunc.call({ id: 2 });
    console.log('namedAdd(2,3)   =', namedAdd(2, 3));
    console.log('anonymousAdd(2,3)=', anonAdd(2, 3));
    console.log('arrowAdd(2,3)    =', arrowAdd(2, 3));
  }, []);

  const [a, b] = [2, 3];

  return (
    <div style={page}>
      <h1 style={h1}>Day 1 – JavaScript Fundamentals Day 1</h1>

      <section style={card}>
        <h2>1. var vs let vs const</h2>
        <pre style={pre}>{`if (true) { var x = 1; let y = 2; const z = 3; }
console.log(x); // 1
console.log(y); // ReferenceError`}</pre>
        <output style={out}>Result: x leaks, y & z don’t ----- check console</output>
      </section>

      <section style={card}>
        <h2>2. Function types</h2>
        <pre style={pre}>{`function named(a,b){ return a+b }
const anon = function(a,b){ return a+b }
const arrow  = (a,b) => a+b`}</pre>
        <output style={out}>{`2 + 3 = ${namedAdd(a, b)} (named) | ${anonAdd(a, b)} (anon) | ${arrowAdd(a, b)} (arrow)`}</output>
      </section>

      <section style={card}>
        <h2>3. Regular vs Arrow (this)</h2>
        <pre style={pre}>{`regular.call({id:1}) // this = {id:1}
arrow.call({id:1})   // this = outer (ignored)`}</pre>
        <output style={out}>See console for this ---- binding proof</output>
      </section>
    </div>
  );
}

/* ---------- inline styles ---------- */
const page = { maxWidth: 680, margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 };
const h1 = { fontSize: '1.5rem', marginBottom: '2rem' };
const card = { border: '1px solid #e5e5e5', borderRadius: 6, padding: '1rem 1.25rem', marginBottom: '1.2rem' };
const pre = { background: '#f6f8fa', padding: '8px 12px', borderRadius: 4, fontSize: '0.85rem', overflowX: 'auto' };
const out = { display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: '#0550ae' };