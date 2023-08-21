import { useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  type status = "success" | "pending" | "failure";
  const [value, setValue] = useState<status>("success");
  const [inputVal, setInputVal] = useState("change me");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  return (
    <div>
      data
      <PostCard title="this is title" disabled={true} />
      <button onClick={() => setValue("failure")}>change status</button>
      <input value={inputVal} onChange={handleChange} />
      <p>{inputVal}</p>
    </div>
  );
};

export default PostList;
