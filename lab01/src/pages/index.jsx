import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from '../components/navbar';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';

export default function Index() {
  return(
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </BrowserRouter>
  );
}