import Layout from "../../Components/Layout";
import PlayerContainer from "../../Components/PlayerContainer";
import { PlayersData } from "../../Interfaces/types";
import { TrackerSerealizer } from "./tracker.serializer";

function Tracker({
  playersData,
  scorePlayer1,
  handleAddWinPlayer1,
  scorePlayer2,
  handleAddWinPlayer2,
  handleSaveGame
}: {
  playersData: PlayersData | null,
  scorePlayer1: number,
  scorePlayer2: number,
  handleAddWinPlayer1: () => void,
  handleAddWinPlayer2: () => void,
  handleSaveGame: () => void
}) {
  const {pointsCopy} = TrackerSerealizer({playersData})
  
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
              {pointsCopy}
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
