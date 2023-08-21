interface IButtonProps {
  title: string;
  disabled: boolean;
}

const PostCard = ({ title, disabled }: IButtonProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <button disabled={disabled}>click me</button>
    </div>
  );
};

export default PostCard;
