import React, { useState } from "react";
import Menu from "./Menu";
import Game from "./Game";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("menu");

  return (
    <div className="App">
      {currentScreen === "menu" && <Menu onStartGame={() => setCurrentScreen("game")} />}
      {currentScreen === "game" && <Game />}
    </div>
  );
}

export default App;
