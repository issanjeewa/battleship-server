import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { RequestMessage } from './types';

export function createServer() {
  const server = http.createServer();
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');

    ws.on('message', (message: string) => {
      console.log(`Received message: ${message}`);

      try {
        const parsedMessage = JSON.parse(message) as RequestMessage;
      } catch (error) {
        console.error('Error processing message:', error);
        ws.send(JSON.stringify({ error: 'Invalid message format' }));
      }

      ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.send('Welcome to Battleship WebSocket server!');
  });

  return server;
}
