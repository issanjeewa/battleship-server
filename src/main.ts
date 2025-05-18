import { createServer } from './server';

const PORT = 8080;

const server = createServer();

server.listen(PORT, () => {
  console.log(`WebSocket server listening on ws://localhost:${PORT}`);
});
