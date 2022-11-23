import React from 'react';
import './styles.scss';

function Snackbar({ message }) {


    return (
        <div>
            <h5>{message}</h5>
        </div>
    )
}

export default Snackbar;