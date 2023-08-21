type cardProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PostCard = ({ names }: cardProps) => {
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
    </div>
  );
};

export default PostCard;
