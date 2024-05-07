import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <ul className="navbar-list">
            <li>
              <a href="#">Shopping-Bag</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
      <body></body>
      <footer></footer>
    </>
  );
}

export default App;
