import React from 'react';
import './styles.scss';

function Button({onClick, children, ...rest}) {

    return (
        <button onClick={onClick} {...rest}>
            {children}
        </button>
    )
}


export default Button;