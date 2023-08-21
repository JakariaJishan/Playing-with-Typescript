import { useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  type status = "success" | "pending" | "failure";
  const [value, setValue] = useState<status>("success");

  return (
    <div>
      data
      <PostCard title="this is title" disabled={true} />
      <button onClick={() => setValue("failure")}>change status</button>
    </div>
  );
};

export default PostList;
