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
import { Products } from './products';

export default function Index() {
  return(
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/*" element={<Products />} />
        </Routes>
    </BrowserRouter>
  );
}