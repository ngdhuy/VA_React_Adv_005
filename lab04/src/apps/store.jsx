import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../components/post/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer
  }
});