const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

//require('dotenv').config();

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://devradar:82932731Dri@@@devradar-ddfdg.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors()); //{ origin: 'http://localhost:3000'}
app.use(express.json()); 
app.use(routes);

// Métodos HTTP: get, post, put, delete
 
// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

server.listen(3333);