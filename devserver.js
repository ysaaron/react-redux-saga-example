let express = require('express');
let path = require('path');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpack = require('webpack');

const PORT = 3000;

let config = require('./webpack.dev.config.js');
let compiler = webpack(config);
let server = express();
let router = express.Router();

router.post('/uploadFile', (req, res) => {
  const responseError = Math.floor(Math.random() * 2);

  setTimeout(() => {
    if(responseError) {
      res
        .status(500)
        .send({
          isSuccess: false
        });
    } else {
      res.send({
        isSuccess: true
      });
    }
  }, 3 * 1000)
});
router.get('/*', (req, res) => res.sendFile('index.html', { root: __dirname }));

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true
}));
server.use(webpackHotMiddleware(compiler));
server.use('/static', express.static('static'));
server.use(router);

server.listen(PORT, err => {
  if(err)
    console.log(err);
  else
    console.info(`==> Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`, PORT, PORT);
})
