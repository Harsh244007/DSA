import { useEffect,useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { observer } from "mobx-react-lite";
import Home from "./store";

const App = observer(() => {
  const [count, setCount] = useState(0);
  async  function updateCount  () {
    setCount((count) => count + 1);
    console.log(`Inside ${count}`)
    setCount((count) => count + 1);
    console.log(`Inside ${count}`)
    setCount((count) => count + 1);
    console.log(`Inside ${count}`)
    setCount(count + 1);
  };
  useEffect(()=>{
    console.log(`Updated ${count}`)
  },[count])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={updateCount}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      {Home.counter}
    </>
  );
});
export { App };
