
export interface Game {
      activity: string;
      players: Array<string>;
      matchTime: string;
      date: string;
      winner: string;
}

export interface AllGames {
      games: Array<Game>
}