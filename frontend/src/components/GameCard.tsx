interface Props {
  name: string;
  backgroundImage: string;
}

function GameCard({ name, backgroundImage }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>
        {backgroundImage && (
          <img src={backgroundImage} alt={name} width={100} />
        )}
      </div>
    </div>
  );
}

export default GameCard;
