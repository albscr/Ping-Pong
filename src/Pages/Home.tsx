import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import useLocalStorage from "../Hooks/useLocalStorage";
import { PlayerData, PlayersData } from "../Interfaces/types";


function Home() {
  const [playersData, setPlayersData] = useLocalStorage<PlayersData & PlayerData>(
    "playersData",
    {} as unknown as PlayersData & PlayerData
  );
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/tracker");
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mt-6">
        Game <span className="text-electric-blue underline">Tracker</span>
      </h1>
      <section className="w-full mt-14 px-4">
        <p className="text-center text-xl font-semibold text-dark-gray">
          Start
        </p>

        <form className="mt-4" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block font-medium leading-6 text-gray-900"
          >
            Player 1
          </label>
          <div className="relative mt-2 ">
            <input
              type="text"
              id="name"
              required
              value={playersData?.player1?.name || ""}
              onChange={(e) =>
                setPlayersData({
                  ...playersData,                  
                  player1: {
                    id: 0,
                    name: e.target.value,
                    score: 0,
                  },
                })
              }
              className="block w-full border-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 focus:border-b focus:outline-none focus:border-electric-blue"
              placeholder="Player 1 name"
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>

          <label
            htmlFor="name"
            className="block mt-10 font-medium leading-6 text-gray-900"
          >
            Player 2
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              id="name"
              required
              value={playersData?.player2?.name || ""}
              onChange={(e) =>
                setPlayersData({
                  ...playersData,                  
                  player2: {
                    id: 1,
                    name: e.target.value,
                    score: 0,
                  },
                })
              }
              className="block w-full border-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 focus:border-b focus:outline-none focus:border-electric-blue"
              placeholder="Player 2 name"
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>

          <button
            type="submit"
            disabled={
              !playersData?.player1?.name && !playersData?.player2?.name
            }
            className={`mt-28 bg-electric-blue relative overflow-hidden transition duration-500 w-full text-white py-3 rounded-full font-semibold ${
              playersData?.player1?.name && playersData?.player2?.name
                ? "hover:bg-medium-blue"
                : "bg-gray-blue cursor-not-allowed"
            }`}
          >
            Play Game
          </button>
        </form>
      </section>
    </Layout>
  );
}

export { Home };
