import React from 'react';
import ScrollingLock from 'react-scrolling-lock';
import ComponentToScrollLock from './component';

const Demo = () => {
    const ComposedComponent = ScrollingLock()(ComponentToScrollLock);

    return (
        <div style={{ height: '3000px' }}>
            <ComposedComponent />
        </div>
    );
};

export default Demo;
