import React from 'react';
import './style.css';
import playerX from '../../images/X.png';
import playerO from '../../images/Circle.png';

const Player = ({player}) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

  return  <button className="player">
        <img src={players[player]} alt={`jogador ${player}`} />
    </button>   
};

export default Player;