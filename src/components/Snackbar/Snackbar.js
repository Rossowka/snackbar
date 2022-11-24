import React, { useEffect } from 'react';
import Slidein from './Slidein';
import Alert from './Alert';
import './styles.scss';

function Snackbar({ message, position, autoHideDuration, setIsActive, severity }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false);
        }, autoHideDuration);

        return () => clearTimeout(timer);
    }, [setIsActive, autoHideDuration])

    return (
        <Slidein
            position={position}
            autoHideDuration={autoHideDuration}
            severity={severity}
            >
            <Alert
                style={{animationDuration: `${autoHideDuration/2}ms`}}
                message={message}
            />
        </Slidein>
    )
}

export default Snackbar;