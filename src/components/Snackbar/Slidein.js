import React from 'react';
import './styles.scss';

function Slidein({ children, position, autoHideDuration, severity }) {
    return (
        <div className='animation container'>
            <div
                className={`snackbar ${position} ${severity}`}
                style={{animationDuration: `${autoHideDuration/2}ms`}}>
                { children }
            </div>
        </div>
    )
}

export default Slidein;