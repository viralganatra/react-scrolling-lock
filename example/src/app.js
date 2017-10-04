import React from 'react';
import ScrollingLock from 'react-scrolling-lock';
import ComponentToScrollLock from './component';

const ComposedComponent = ScrollingLock()(ComponentToScrollLock);

const Demo = () => (
    <div style={{ height: '3000px' }}>
        <div style={{ display: 'flex' }}>
            <ComposedComponent />

            <p style={{ marginLeft: '50px' }}>Scroll The Page</p>
        </div>
    </div>
);

export default Demo;
