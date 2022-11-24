import React from 'react';
import './styles.scss';

function Slidein({ children }) {
    return (
        <div className='animation container'>
            { children }
        </div>
    )
}

export default Slidein;