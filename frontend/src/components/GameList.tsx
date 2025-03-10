import GameCard from "./GameCard";
import { GameApi } from "../services/GameAPI";
import { useQuery } from "@tanstack/react-query";
import Game from "../interfaces/Game";

function GameList() {
  const gamesQuery = useQuery({
    queryKey: ["games"],
    queryFn: GameApi.GetGames,
  });

  const portalQuery = useQuery({
    queryKey: ["portal"],
    queryFn: () => GameApi.GetGame(4200),
  });

  return (
    <>
      <h1>Favorite</h1>
      {portalQuery.data && (
        <GameCard
          name={portalQuery.data.name}
          backgroundImage={portalQuery.data.background_image}
        />
      )}
      <h2>Other Games</h2>
      {gamesQuery.data &&
        gamesQuery.data.map((game: Game) => (
          <GameCard
            key={game.id}
            name={game.name}
            backgroundImage={game.background_image}
          />
        ))}
    </>
  );
}

export default GameList;
