const express = require('express');
const cors = require('cors');

//database
const db = require('./data/db.js');
const server = express();

//Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// ---- ROUTES ---- //
//GET
server.get('/', (req, res) => {});
//Get by id
server.get('/:id', (req, res) => {});

//POST
server.post('/', (req, res) => {});

//PUT
server.put('/', (req, res) => {});

//DELETE
server.delete('/', (req, res) => {});

module.exports(server);
