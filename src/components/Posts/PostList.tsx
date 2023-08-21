import PostCard from "./PostCard";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const PostList = async () => {
  const data = await fetchData();

  return (
    <div>
      Data List
      {data.map((post: { id: number; title: string; body: string }) => {
        <PostCard key={post.id} {...post} />;
      })}
    </div>
  );
};

export default PostList;
