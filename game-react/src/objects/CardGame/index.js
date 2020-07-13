import React from 'react';
import './style.css';

const CardGame = (props) => (
    <article className="card-game">
        {props.children}
    </article>
);

export default CardGame;