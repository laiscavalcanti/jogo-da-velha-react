import React from 'react';
import './style.css';

import InputGame from '../InputGame';
import LabelGame from '../LabelGame';

const handleClick = ()=>{
    
}

const InputCheckbox = ({ id = "", value = "", content = "", onClick }) => (
    <>
        <InputGame id={id} value={value} type="checkbox" content={content} />
        <LabelGame htmlFor={id} content={content} onClick={onClick} />
    </>
)

export default InputCheckbox;