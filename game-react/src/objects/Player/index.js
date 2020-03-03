import React from 'react';
import './style.css';
import playerX from '../../images/X.png';

const Player = () => (
    <button className="player">
        <img src={playerX} />
    </button>
    
)

export default Player;