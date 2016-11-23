const express = require('express');
const path = require('path');

var app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html'))); 

const port = process.env.PORT || 3000;

const server = require('http').createServer(app);

server.listen(port, ()=> console.log(`listening on ${port}`) );
