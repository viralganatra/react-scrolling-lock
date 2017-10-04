import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const mountNode = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mountNode,
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => render(App));
}
