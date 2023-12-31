export interface PlayerData {
  id: number;
  name: string;
  score: number;
}

export interface PlayersData {
  player1?: PlayerData;
  player2?: PlayerData;
}

export interface Winner {
  winner: string;
  maxScore: number;
}
