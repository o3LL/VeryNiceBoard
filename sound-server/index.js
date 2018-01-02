
const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(function (req, res) {
    res.send({ msg: "hello" });
  });

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

var global_counter = 0,
all_active_connections = {};

wss.on('connection', function connection(ws) {

    var id = global_counter++;
        all_active_connections[id] = ws;
        ws.id = id; 

    ws.on('message', function incoming(message) {
        console.log("Playing :", message, " from ",  ws._socket.remoteAddress);
        for (conn in all_active_connections)
            all_active_connections[conn].send(message.toString());
    });

    ws.on('close', function() {
        console.log('Disconnected');
        delete all_active_connections[ws.id];
    });

    ws.on('error', (e) => console.log('errored : ', e));
  });

  server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
  });

  server.timeout = 0;