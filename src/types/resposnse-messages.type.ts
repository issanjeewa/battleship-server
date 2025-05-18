import { MessageType } from '../enums';
import * as MsgDataTypes from './message-data.type';

export type LoginResponse = {
  type: MessageType.REGISTER;
  data: MsgDataTypes.LoginResponseData;
  id: number;
};

export type UpdateWinnersResponse = {
  type: MessageType.UPDATE_WINNERS;
  data: Array<MsgDataTypes.UpdateWinnerResponseData>;
};

export type CreateGameResponseData = {
  type: MessageType.CREATE_GAME;
  data: MsgDataTypes.CreateGameResponseData;
  id: number;
};

export type UpdateRoomResponse = {
  type: MessageType.UPDATE_ROOM;
  data: MsgDataTypes.UpdateRoomResponseData;
  id: number;
};

export type StartGameResponseData = {
  type: MessageType.START_GAME;
  data: MsgDataTypes.StartGameResponseData;
  id: number;
};

export type AttackResponseData = {
  type: MessageType.ATTACK;
  data: MsgDataTypes.AttackResponseData;
  id: number;
};

export type TurnInfoResponse = {
  type: MessageType.TURN;
  data: MsgDataTypes.TurnInfoResponseData;
  id: number;
};

export type FinishGameResponse = {
  type: MessageType.FINNISH;
  data: MsgDataTypes.FinishGameResponseData;
  id: number;
};
