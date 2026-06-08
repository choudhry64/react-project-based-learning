We are going to learn react by making projects and from each project I will keep notes here

# React Notes — Project Based Learning

---

## What is React?

React is a JavaScript **library** for building user interfaces.

Before React, if anything changed on a page — the **entire page reloaded**. React fixed this by introducing the concept of **re-rendering only what changed**, making apps faster and smoother.

> Think of it like this — in vanilla JS you were manually updating the DOM. React does that for you, but smarter.

---

## How React Works — The Core Idea

React uses a **Virtual DOM** — a copy of the real DOM kept in memory.

When something changes:

1. React updates the Virtual DOM first
2. Compares it with the previous version
3. Only updates the **specific part** that changed in the real DOM

This is why React is fast — no full page reloads.

---

## Components

React apps are made of **components** — reusable pieces of UI.

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

- Every component returns **JSX** (looks like HTML, but it's JavaScript)
- Component name always starts with **Capital letter**
- One component = one job

---

## JSX

JSX is HTML written inside JavaScript.

```jsx
// Normal JS
const element = document.createElement("h1");

// JSX — cleaner and easier
const element = <h1>Hello</h1>;
```

Rules:

- Always wrap in one parent element — use `<> </>` if no wrapper needed
- `class` becomes `className` in JSX
- JavaScript inside JSX goes in `{ }`

---

## useState Hook

> **Project Reference: Counter App**

`useState` is used when you want the UI to **update when a value changes**.

```jsx
const [count, setCount] = useState(0);
//     ^value  ^setter    ^initial value
```

**Golden Rules:**

- `count` — only for **reading**
- `setCount` — only for **changing**
- Never do `count = count + 1` directly — React won't re-render
- Always use the setter function

**Why count++ doesn't work:**

```jsx
count++; // ❌ directly mutates — React doesn't know it changed
setCount(count + 1); // ✅ React knows — triggers re-render
```

**Counter App Example:**

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      // count won't go below 0
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
```

**When to use useState:**

- Counter, toggle, form input, anything that changes and needs UI update

---

## What is a Hook?

Hooks are special functions in React that let you "hook into" React features.

- `useState` — for storing and updating state
- `useEffect` — for side effects (API calls, timers etc.)
- You can also create **custom hooks** for repetitive logic

Rule: Hooks always start with `use`

---

## Re-render

Re-render = React updates the UI when state changes.

- Normal variable change → **no re-render**
- `setState` call → **re-render happens**

Only the **component that has the state** re-renders — not the whole page.

---

## useEffect Hook

> _(Coming soon — WeatherApp React project)_

---

## Props

> _(Coming soon)_

---

## React Router

> _(Coming soon)_

---

_Updated as new concepts are learned through projects._
