import { createServer } from './server';
import dotEnv from 'dotenv';

dotEnv.config();

const PORT = process.env.SERVER_PORT || 8080;

const server = createServer();

server.listen(PORT, () => {
  console.log(`WebSocket server listening on ws://localhost:${PORT}`);
});
