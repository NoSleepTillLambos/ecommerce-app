import "./App.css";
import CardComponent from "./components/CardComponent";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardComponent />
      <div className="App">
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
