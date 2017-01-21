import React from 'react';

const Component = () => {
    const scrollingContainerStyles = {
        height: '300px',
        overflow: 'auto',
        width: '200px',
    };

    const scrollingComponentStyles = {
        height: '600px',
    };

    return (
        <div style={scrollingContainerStyles}>
            <div style={scrollingComponentStyles}>Scrolling Component</div>
        </div>
    );
};

export default Component;
