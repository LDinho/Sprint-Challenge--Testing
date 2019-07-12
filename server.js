const express = require('express');
const server = express();
server.use(express.json());

const gamesRouter = require('./routers/gamesRouter');

server.use('/games', gamesRouter);

server.get('/', (req, res) => {
  res.send('Games!');
});

module.exports = server;
