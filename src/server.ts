// src/server.ts
import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

export function createServer() {
  const server = http.createServer();
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');

    ws.on('message', (message: string) => {
      console.log(`Received: ${JSON.parse(message)}`);
      ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.send('Welcome to Battleship WebSocket server!');
  });

  return server;
}
