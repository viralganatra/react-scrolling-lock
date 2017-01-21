const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config')({ dev: true });

const app = express();
const server = require('http').createServer(app);

const compiler = webpack(config);
const port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

app.use('/', express.static('.'));

server.listen(port, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${port}`);
});
