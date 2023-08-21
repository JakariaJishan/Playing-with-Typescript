const PostCard = (props: { id: number; title: string; body: string }) => {
  return (
    <div>
      PostCard
      {props.title}
      {props.body}
    </div>
  );
};

export default PostCard;
