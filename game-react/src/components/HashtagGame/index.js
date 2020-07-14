import React from 'react';
import PlayerGame from '../../objects/PlayerGame';
import CardGame from '../../objects/CardGame';

import './style.css';


const HashtagGame = () =>(

   <CardGame>
    <ul className="hashtag-game">
        {players.map (player =>(
            <li className="item" onClick={h}></li>
        ))}
    </ul>
    </CardGame>


);

export default HashtagGame;