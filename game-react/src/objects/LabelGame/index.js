import React from 'react';
import './style.css';

const LabelGame = ({ htmlFor, content, onClick }) => (
    <label className="label-game" htmlFor={htmlFor} onClick={onClick}>{content}</label>
);

export default LabelGame;