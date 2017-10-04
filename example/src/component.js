import React from 'react';

const Component = () => {
    const scrollingContainerStyles = {
        height: '300px',
        overflow: 'auto',
        width: '250px',
    };

    const scrollingComponentStyles = {
        height: '600px',
        color: 'white',
        backgroundColor: '#1abc9c',
        padding: '10px',
    };

    return (
        <div style={scrollingContainerStyles}>
            <div style={scrollingComponentStyles}>
                <p>Scrolling Component - Scroll Me</p></div>
        </div>
    );
};

export default Component;
