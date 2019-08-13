const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const server = express();

mongoose.connect('mongodb+srv://vidaldev:swordfish95@cluster0-lfvyw.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

server.use(express.json());
server.use(routes);

server.listen(3333);