
import { Server as SocketServer } from 'socket.io';

const io = new SocketServer(5000, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
  
  
    socket.on('disconnect', () => {
    });
  });