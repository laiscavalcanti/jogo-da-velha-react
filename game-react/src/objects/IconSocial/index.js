import React from 'react';

const IconSocial = ({ action, alt }) => (
    <a target="_blank" href={action} rel="noopener noreferrer">
        <img className="IconSocial" alt={alt} />
    </a>
);

export default IconSocial;