import React from 'react';
import PlayerGame from '../../objects/PlayerGame';
import CardGame from '../../objects/CardGame';

import './style.css';

const HashtagGame = () =>(

   <CardGame>
    <ul className="hashtag-game">
        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="o" /></li>

        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>

        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="o" /></li>
    </ul>
    </CardGame>


);

export default HashtagGame;