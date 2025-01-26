import logo from "./logo.svg";
import "./App.css";
import Hello from "./header/Header.js";


function App() {
  const username = process.env.REACT_APP_USERNAME;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
        <p>username: {username}</p>
      </header>
    </div>
  );
}

export default App;
