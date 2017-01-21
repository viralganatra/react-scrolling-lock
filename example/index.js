import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const mountNode = document.getElementById('root');

function rerender(App2) {
    render(
        <AppContainer>
            <App2 />
        </AppContainer>,
        mountNode,
    );
}

if (module.hot) {
    module.hot.accept('./app', () => {
        System.import('./app').then(({ default: App2 }) => {
            unmountComponentAtNode(mountNode);
            rerender(App2);
        });
    });
}

rerender(App);
