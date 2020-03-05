import React from 'react';
import './style.css';

const Card = (props) => (
    <article className="card">
        {props.children}
    </article>
);

export default Card;