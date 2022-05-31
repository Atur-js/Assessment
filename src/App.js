import "./App.css";
import { Sidebar } from "./components/Sidebar";
import {  Route, Routes, Navigate } from "react-router-dom";
import { Campaigns } from "./components/Campaigns/Campaigns";
import { Home } from "./components/Campaigns/Home";
import { Google } from "./components/Campaigns/Google";
import { Settings } from "./components/Settings";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Hubspot from "./components/Campaigns/Hubspot";
import Search from "./components/Search/Search";
import {Pipedrive} from "./components/Campaigns/Pipedrive";

function App() {
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
      </header>
    </div>
  );
}

export default App;
