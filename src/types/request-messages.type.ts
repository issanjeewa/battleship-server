import { MessageType } from '../enums';
import * as MsgDataTypes from './message-data.type';

export type LoginRequest = {
  type: MessageType.REGISTER;
  data: MsgDataTypes.LoginRequestData;
  id: number;
};

export type CreateRoomRequest = {
  type: MessageType.CREATE_ROOM;
  data: MsgDataTypes.CreateRoomRequestData;
  id: number;
};

export type AddShipsRequest = {
  type: MessageType.ADD_SHIPS;
  data: MsgDataTypes.AddShipsRequestData;
  id: number;
};

export type AttackRequest = {
  type: MessageType.ATTACK;
  data: MsgDataTypes.AttackRequestData;
  id: number;
};

export type RandomAttackRequest = {
  type: MessageType.RANDOM_ATTACK;
  data: MsgDataTypes.RandomAttackRequestData;
  id: number;
};
