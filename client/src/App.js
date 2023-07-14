import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div className="t-bg-blue-500 t-text-white t-p-4">
        <h1 className="t-text-2xl t-font-bold">Hello, Tailwind CSS!</h1>
        <p className="t-mt-2">Tailwind CSS is awesome!</p>
      </div>
    </div>
  );
}

export default App;
