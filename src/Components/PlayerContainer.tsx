import Button from "./Button";

interface PlayerContainerProps {
  playerData: {
    name: string;
  };
  score: number;
  handleAddWin: () => void;
}
const PlayerContainer: React.FC<PlayerContainerProps> = ({
  playerData,
  score,
  handleAddWin,
}) => {
  return (
    <div className="relative mt-2">
      <span className="absolute -top-3 left-2 inline-block bg-white px-1 font-medium">
        {playerData.name}
      </span>
      <div className="flex flex-col w-72  mb-5 items-center rounded-md border-0 py-6 shadow-md ring-1 ring-light-gray ring-inset">
        <div className="flex justify-around items-center w-full ml-10 mb-1 text-medium-blue text-lg">
          <span>{playerData.name}</span>
          <Button onClick={handleAddWin} />
        </div>
        <span className="text-lg text-dark-blue">Wins: {score}</span>
      </div>
    </div>
  );
};

export default PlayerContainer;
