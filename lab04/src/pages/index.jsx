import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { NavBar } from '../components/navbar';
import { PostForm } from "../components/post/postForm";
import { PostList } from "../components/post/postList";
import './style.css';

export default function Index() {
  return(
    <Router>
      <h1>Welcome to Blog application</h1>
      <NavBar />
        <Routes>
          <Route exact path='/' element={(
            <React.Fragment>
              <PostForm />
              <PostList />
            </React.Fragment>
          )}/>
        </Routes>
    </Router>
  );
}