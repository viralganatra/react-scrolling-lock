import React from 'react';
import ScrollingLock from 'react-scrolling-lock';
import ComponentToScrollLock from './component';

const ComposedComponent = ScrollingLock()(ComponentToScrollLock);

const Demo = () => (
    <div style={{ height: '3000px' }}>
        <ComposedComponent />
    </div>
);

export default Demo;
