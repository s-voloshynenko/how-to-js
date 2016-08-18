const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.NODE_PORT || 8080;
const HOST = process.env.NODE_IP || 'localhost'

/** Easy-peasy server */
server
  .use(express.static(path.resolve(__dirname, 'build')))
  .use('/api', require('./api'))
  .get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
  .listen(PORT, HOST, () => console.log(
    `Server is running on http://${HOST}:${PORT}`
  ));
