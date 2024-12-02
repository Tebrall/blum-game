import React, { useState, useEffect } from "react";
import "./Game.css";
import allianceCoinImg from "./images/alliancelloggo1.PNG";
import orcCoinImg from "./images/ORC.PNG";

const Game = () => {
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState([]);
  const [bombs, setBombs] = useState([]);
  const [damageEffect, setDamageEffect] = useState(false);

  const handleCoinClick = (id) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
    setScore((prevScore) => prevScore + 1);
  };

  const handleBombClick = (id) => {
    setBombs((prevBombs) => prevBombs.filter((bomb) => bomb.id !== id));
    setScore((prevScore) => Math.max(0, prevScore - 10));
    setDamageEffect(true);
    requestAnimationFrame(() => {
      setTimeout(() => setDamageEffect(false), 300);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newCoin = { id: Math.random(), left: Math.random() * 90 };
      const newBomb = { id: Math.random(), left: Math.random() * 90 };

      setCoins((prevCoins) => [...prevCoins.slice(-20), newCoin]);
      setBombs((prevBombs) => [...prevBombs.slice(-20), newBomb]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`game-container ${damageEffect ? "damage" : ""}`}>
      <h1>Score: {score}</h1>
      <div className="game-area">
        {coins.map((coin) => (
          <img
            key={coin.id}
            src={allianceCoinImg}
            className="coin"
            style={{ left: `${coin.left}%` }}
            onClick={() => handleCoinClick(coin.id)}
            alt="Alliance Coin"
          />
        ))}
        {bombs.map((bomb) => (
          <img
            key={bomb.id}
            src={orcCoinImg}
            className="bomb"
            style={{ left: `${bomb.left}%` }}
            onClick={() => handleBombClick(bomb.id)}
            alt="Orc Coin"
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
