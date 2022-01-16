import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdd } from "./postsSlice";

import './style.css';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onCreateNewPost = () => {
    if(title && content) {
      dispatch( postAdd({
        id: nanoid(),
        title,
        content
      }))
    }
  }

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor='postTitle'>Post title:</label>
        <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
        <label htmlFor='postContent'>Post content</label>       
        <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged} />
        <button type='button' onClick={onCreateNewPost}>Create new Post</button>
      </form>
    </section>
  );
}