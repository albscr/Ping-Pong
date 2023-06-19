import { useNavigate } from "react-router-dom";
import { Home } from ".";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { PlayersData } from "../../Interfaces/types";
import { FormEvent } from "react";

function HomeController() {
  const [playersData, setPlayersData] = useLocalStorage<PlayersData | null>(
    "playersData",
    null
  );
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/tracker");
  };
  return (
    <Home
      playersData={playersData}
      setPlayersData={setPlayersData}
      handleSubmit={handleSubmit}
    />
  );
}

export default HomeController;
