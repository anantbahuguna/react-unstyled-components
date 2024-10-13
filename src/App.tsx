import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { FadeUp } from "./components/FadeUp/FadeUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FadeUp delay={0.4}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </FadeUp>
        <FadeUp delay={0.6}>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </FadeUp>
        <FadeUp delay={0.8}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </FadeUp>
        <FadeUp delay={1}>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </FadeUp>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        {Array.from(Array(50).keys()).map((i) => (
          <FadeUp delay={0.3}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              reprehenderit consectetur aliquam, numquam voluptatibus maiores
              modi architecto aspernatur inventore quibusdam accusamus harum,
              cumque ab ducimus! Saepe ipsam debitis quidem perspiciatis!
            </p>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.4}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </FadeUp>
      <FadeUp delay={0.6}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </FadeUp>
      <FadeUp delay={0.8}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </FadeUp>
      <FadeUp delay={1}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </FadeUp>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button label={"Hello"} />
    </>
  );
}

export default App;
