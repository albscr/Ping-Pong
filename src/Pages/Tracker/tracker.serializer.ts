import { PlayersData } from "../../Interfaces/types";

export const TrackerSerealizer = ({
  playersData,
}: {
  playersData: PlayersData | null;
}) => {
  return {
    pointsCopy:
      playersData?.player1?.score !== undefined &&
      playersData?.player2?.score !== undefined
        ? playersData?.player1?.score > playersData?.player2?.score
          ? `${playersData?.player1?.name} ${playersData?.player1?.score} points`
          : playersData?.player1?.score < playersData?.player2?.score
          ? `${playersData?.player2?.name} ${playersData?.player2?.score} points`
          : playersData?.player1?.score === 0 &&
            playersData?.player2?.score === 0
          ? "No winner yet"
          : "Tie - Must break the tie to win"
        : "No winner yet",
  };
};
