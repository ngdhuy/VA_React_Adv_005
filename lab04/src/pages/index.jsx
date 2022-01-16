import { PostList } from "../components/post/postList";
import './style.css';

export default function Index() {
  return(
    <div>
      <h1>Welcome to Blog application</h1>
      <PostList />
    </div>
  );
}