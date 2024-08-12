import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${hours}:${minutes}`;
    };

    return (
        <div style={{
            fontSize: '100px',
            color: 'red',
            fontFamily: 'monospace',
            textAlign: 'center',
            background: 'black',
            padding: '20px',
            borderRadius: '15px',
            display: 'inline-block'
        }}>
            {formatTime(time)}
        </div>
    );
}

export default Clock;
