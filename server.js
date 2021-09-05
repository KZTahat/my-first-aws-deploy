'use strict';

const express = require('express');
const server = express();
const port = 3001;

server.get('/', (req, res) => {
    res.send('All Good 😁')
})

server.listen(port, () => {
    console.log(`Server Is Listening On Port ${port}`);
})