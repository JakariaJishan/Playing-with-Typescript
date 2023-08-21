type cardProps = {
  names: {
    first: string;
    last: string;
  }[];
  handleButton: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const PostCard = ({ names, handleButton }: cardProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <div key={name.first}>
            <h1>{name.first}</h1>
            <h3>{name.last}</h3>
          </div>
        );
      })}
      <button onClick={(e) => handleButton(e, 1)}>Clickx me</button>
    </div>
  );
};

export default PostCard;
