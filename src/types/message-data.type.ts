import { AttackStatus, ShipType } from '../enums';

//SECTION - Data Types
export type PositionData = {
  x: number;
  y: number;
};

export type ShipDetails = {
  position: PositionData;
  direction: boolean;
  length: number;
  type: ShipType;
};
//!SECTION

//SECTION - Request Messages
export type LoginRequestData = {
  name: string;
  password: string;
};

export type CreateRoomRequestData = "";

export type AddToRoomRequestData = {
  indexRoom: number | string;
};

export type AddShipsRequestData = {
  gameId: number | string;
  ships: Array<ShipDetails>;
  indexPlayer: number | string;
};

export type AttackRequestData = {
  gameId: number | string;
  indexPlayer: number | string;
  position: PositionData;
};

export type RandomAttackRequestData = {
  gameId: number | string;
  indexPlayer: number | string;
};
//!SECTION

//SECTION - Response Messages
export type LoginResponseData = {
  name: string;
  index: number | string;
  error: boolean;
  errorText: string;
};

export type UpdateWinnerResponseData = {
  name: string;
  wins: number;
};

export type CreateGameResponseData = {
  idGame: number | string;
  idPlayer: number | string;
};

export type UpdateRoomResponseData = {
  roomId: number | string;
  roomUsers: [
    {
      name: string;
      index: number | string;
    }
  ];
};

export type StartGameResponseData = {
  ships: Array<ShipDetails>;
  currentPlayerIndex: number | string;
};

export type AttackResponseData = {
  position: PositionData;
  currentPlayer: number | string;
  status: AttackStatus;
};

export type TurnInfoResponseData = {
  currentPlayer: number | string;
};

export type FinishGameResponseData = {
  winPlayer: number | string;
};
//!SECTION
