export enum MessageType {
  REGISTER = 'reg',
  UPDATE_WINNERS = 'update_winners',
  CREATE_ROOM = 'create_room',
  ADD_TO_ROOM = 'add_user_to_room',
  CREATE_GAME = 'create_game',
  UPDATE_ROOM = 'update_room',
  ADD_SHIPS = 'add_ships',
  START_GAME = 'start_game',
  ATTACK = 'attack',
  RANDOM_ATTACK = 'randomAttack',
  TURN = 'turn',
  FINNISH = 'finish',
}

export enum ShipType {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
}

export enum AttackStatus {
  SHOT = 'shot',
  MISS = 'miss',
  KILLED = 'killed',
}
