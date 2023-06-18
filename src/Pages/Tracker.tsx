import { useState } from "react";
import { PlayersData } from "../Interfaces/types";
import useLocalStorage from "../Hooks/useLocalStorage";
import Layout from "../Components/Layout";
import PlayerContainer from "../Components/PlayerContainer";

function Tracker() {
  const [playersData, setPlayersData] = useLocalStorage<PlayersData | null>(
    "playersData",
    null
  );
  const [scorePlayer1, setScorePlayer1] = useState<number>(
    playersData?.player1?.score || 0
  );
  const [scorePlayer2, setScorePlayer2] = useState<number>(
    playersData?.player2?.score || 0
  );

  const handleAddWinPlayer1 = () => {
    if (playersData && playersData.player1) {
      const updatedPlayerData = {
        ...playersData,
        player1: {
          ...playersData.player1,
          score: playersData.player1.score + 1,
        },
      };
      setPlayersData(updatedPlayerData);
      setScorePlayer1(updatedPlayerData.player1.score);
    }
  };

  const handleAddWinPlayer2 = () => {
    if (playersData && playersData.player2) {
      const updatedPlayerData = {
        ...playersData,
        player2: {
          ...playersData.player2,
          score: playersData.player2.score + 1,
        },
      };
      setPlayersData(updatedPlayerData);
      setScorePlayer2(updatedPlayerData.player2.score);
    }
  };

  const saveGameToLocalStorage = () => {
    const gameData = {
      player1: {
        name: playersData?.player1?.name,
        score: scorePlayer1,
      },
      player2: {
        name: playersData?.player2?.name,
        score: scorePlayer2,
      },
    };

    const savedGamesString = localStorage.getItem("savedGames");
    const savedGames =
      savedGamesString !== null ? JSON.parse(savedGamesString) : [];
    savedGames.push(gameData);
    localStorage.setItem("savedGames", JSON.stringify(savedGames));
  };
  const handleSaveGame = () => {
    saveGameToLocalStorage();
    window.location.href = "/leaderboard";
  };

  return (
    <Layout>
      <h1 className="text-4xl font-semibold text-center mt-6">
        Game <span className="text-electric-blue underline">Tracker</span>
      </h1>
      <section className="mt-9 mb-4 flex flex-col items-center">
        <PlayerContainer
          playerData={playersData?.player1 ? playersData.player1 : { name: "" }}
          score={scorePlayer1}
          handleAddWin={handleAddWinPlayer1}
        />
        <PlayerContainer
          playerData={playersData?.player2 ? playersData.player2 : { name: "" }}
          score={scorePlayer2}
          handleAddWin={handleAddWinPlayer2}
        />
        <br />

        <div>
          <p className="flex flex-col items-center text-dark-gray">
            Current winner:{" "}
            <span className="text-medium-blue text-lg">
              {playersData?.player1?.score &&
                playersData?.player2?.score &&
                (playersData?.player1?.score > playersData?.player2?.score
                  ? `${playersData?.player1?.name} ${playersData?.player1?.score} points`
                  : playersData?.player1?.score < playersData?.player2?.score
                  ? `${playersData?.player2?.name} ${playersData?.player2?.score} points`
                  : "Tie  - Must break the tie to win")}
            </span>
          </p>
        </div>

        <button
          onClick={handleSaveGame}
          disabled={playersData?.player1?.score === playersData?.player2?.score}
          className={`mt-6 bg-electric-blue relative overflow-hidden transition duration-500 w-full text-white py-3 rounded-full font-semibold ${
            playersData?.player1?.score === playersData?.player2?.score
              ? "bg-gray-blue cursor-not-allowed"
              : "hover:bg-medium-blue"
          }`}
        >
          Save game
        </button>
      </section>
    </Layout>
  );
}

export { Tracker };