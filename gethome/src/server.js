const express = require('express');
    const app = express();
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);
    const port = process.env.PORT || 4001;
    
    io.on('connection', async (socket) => {
      socket.on('ping', (data) => {
        socket.emit('newLocation', data);
      });
    });
    
    http.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });