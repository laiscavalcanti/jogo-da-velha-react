import React from 'react';
import './style.css';
import playerX from '../../images/X.png';
import playerO from '../../images/Circle.png';

const Player = () => (
    <button className="player">
        <img src={playerX} alt="jogador X" />
    </button>
    
)

export default Player;