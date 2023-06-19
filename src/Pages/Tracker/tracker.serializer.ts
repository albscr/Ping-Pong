import { PlayersData } from "../../Interfaces/types";

export const TrackerSerealizer = ({
  playersData,
}: {
  playersData: PlayersData | null;
}) => {
  let winnerName = "No winner yet";
  let scoreDifference = 0;

  if (
    playersData?.player1?.score !== undefined &&
    playersData?.player2?.score !== undefined
  ) {
    scoreDifference = playersData.player1.score - playersData.player2.score;

    if (scoreDifference > 0) {
      winnerName = playersData.player1.name;
    } else if (scoreDifference < 0) {
      winnerName = playersData.player2.name;
      scoreDifference *= -1; // Convierte la diferencia a positivo
    }
  }

  return {
    pointsCopy: `${winnerName} for ${scoreDifference} points`,
  };
};
