import { useState } from "react";
import { Tracker } from ".";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { PlayersData } from "../../Interfaces/types";


function TrackerController() {
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
    <Tracker playersData={playersData}
    scorePlayer1={  scorePlayer1}
    handleAddWinPlayer1={  handleAddWinPlayer1}
    scorePlayer2={  scorePlayer2}
    handleAddWinPlayer2={  handleAddWinPlayer2}
    handleSaveGame={  handleSaveGame} />
  )
}

export default TrackerController