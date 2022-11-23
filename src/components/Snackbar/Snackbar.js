import React from 'react';
import './styles.scss';

function Snackbar({ message, position }) {

    console.log(position);
    return (
        <div className={`snackbar ${position === 'topCenter' ? 'top-center' : 'bottom-right'}`}>
            <h5>{message}</h5>
        </div>
    )
}

export default Snackbar;