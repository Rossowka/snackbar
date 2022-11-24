import React, { useEffect } from 'react';
import Slidein from './Slidein';
import './styles.scss';

function Snackbar({ message, position, autoHideDuration, setIsActive }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false);
        }, autoHideDuration);

        return () => clearTimeout(timer);
    }, [setIsActive, autoHideDuration])

    return (
        <Slidein position={ position }>
            <div className={`snackbar ${position}`} style={{animationDuration: `${autoHideDuration/2}ms`}}>
                <h5>{ message }</h5>
            </div>
        </Slidein>
    )
}

export default Snackbar;