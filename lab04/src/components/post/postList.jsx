import React from "react";
import { useSelector } from "react-redux";
import './style.css';

export const PostList = () => {
  const posts = useSelector(state => state.posts);

  const postElements = posts.map(post => (
    <article className="post-item" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        { 
          post.content.length <100 ?
          post.content :
          post.content.substring(0, 100) + " ..."
        }
      </p>
    </article>
  ));

  return(
    <section className="post-list">
      <h2>List of Posts</h2>
      {postElements}
    </section>
  );
}