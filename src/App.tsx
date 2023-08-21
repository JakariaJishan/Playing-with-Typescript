import { lazy, Suspense } from "react";
const PostList = lazy(() =>
  import("./components/Posts/PostList").then(({ PostList }) => ({
    default: PostList,
  }))
);
const App = () => {
  return (
    <div>
      App
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default App;
