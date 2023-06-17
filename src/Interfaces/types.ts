export interface PlayerData {
  id: number;
  name: string;
  score: number;
}

export interface PlayersData extends PlayerData {
  player1: PlayerData;
  player2: PlayerData;
}

export interface GameData {
  player1: {
    name: string;
    score: number;
  };
  player2: {
    name: string;
    score: number;
  };
}

