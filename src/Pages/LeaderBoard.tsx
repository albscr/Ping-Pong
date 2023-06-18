import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { PlayersData } from "../Interfaces/types";

interface Winner {
  winner: string;
  maxScore: number;
}

function Leaderboard() {
  const savedGame = localStorage.getItem("savedGames")
    ? JSON.parse(localStorage.getItem("savedGames") as string)
    : [];

  const [messages, setMessages] = useState<string[]>([]);
  let winner = "";
  let maxScore = 0;
  let record = localStorage.getItem("record_winner");
  let winners: Winner[] = [];

  useEffect(() => {
    if (record) {
      const maxScores = winners.map((game) => game.maxScore);
      const highestScore = Math.max(...maxScores);      

      if (maxScore >= highestScore) {
        setMessages(() => ["You've broken the record! 💃"]);

        const recordWinner = winners.find(
          (game) => game.maxScore === highestScore
        )?.winner;
        if (recordWinner) {
          localStorage.setItem("record_winner", recordWinner);
        }
      } else {
        setMessages(() => ["You didn't break the record 🥲"]);
      }
    } else {
      setMessages(() => ["You have set a new record! 😀"]);
      const highestScore = Math.max(...winners.map((game) => game.maxScore));
      const recordWinner = winners.find(
        (game) => game.maxScore === highestScore
      )?.winner;
      if (recordWinner) {
        localStorage.setItem("record_winner", recordWinner);
      }
    }
  }, []);

  

  const handleNewGame = () => {
    localStorage.removeItem("playersData");
  };

  if (savedGame.length > 0) {
    let winners = savedGame.map((game: PlayersData) => {
      if (game.player1 && game.player2) {
        if (game.player1.score > game.player2.score) {
          winner = game.player1.name;
          maxScore = game.player1.score;
        } else if (game.player2.score > game.player1.score) {
          winner = game.player2.name;
          maxScore = game.player2.score;
        }
      }

      return { winner, maxScore };
    });
    winners.sort((a: Winner, b: Winner) => b.maxScore - a.maxScore);

    return (
      <Layout>
        <h1 className="text-4xl font-bold text-center mt-6">Leaderboard</h1>

        <div className="relative flex flex-col w-full  items-center rounded-md border-0 py-2 my-8 shadow-md ring-1 ring-light-gray ring-inset">
          <p className="text-lg text-center absolute -top-3 inline-block bg-white">
            Winner:
          </p>
          <span className="text-2xl my-4">
            🏆 {winner} - {maxScore} 🏆
          </span>
          <p className="text-center text-sm mb-2">
            {messages.map((message, index) => (
              <span className="text-dark-gray" key={index}>
                {message}
              </span>
            ))}
          </p>
        </div>

        <ul className="flex flex-col items-center list-decimal">
          {winners.map((game: any, index: number) => (
            <li
              key={index}
              className={`${
                index === 0
                  ? "text-lg border-b-2 border-electric-blue mb-1.5 leading-none"
                  : "mb-1 text-sm text-dark-gray"
              }`}
            >
              <span className="">{game.winner}</span> -{" "}
              <span>{game.maxScore}</span>
            </li>
          ))}
        </ul>

        <Link onClick={handleNewGame} to="/">
          <button className="mt-20 bg-electric-blue hover:bg-medium-blue relative overflow-hidden transition duration-500 w-full text-white py-3 rounded-full font-semibold">
            New Game
          </button>
        </Link>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1 className="text-4xl font-bold text-center mt-6">Leaderboard</h1>
        <p className="text-center">No game data available.</p>
        <Link to="/" className="w-full">
          <button className="mt-20 bg-electric-blue hover:bg-medium-blue relative overflow-hidden transition duration-500 w-full text-white py-3 rounded-full font-semibold">
            New Game
          </button>
        </Link>
      </Layout>
    );
  }
}

export { Leaderboard };
