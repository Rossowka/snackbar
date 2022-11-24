import React from 'react';
import './styles.scss';

function Alert({ message }) {
    return (
        <div>
            <h5>{ message }</h5>
        </div>
    )
}

export default Alert;