import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './home';
import { MyProfile } from './my_profile';
import { Profile} from './profile';
import { OthersProfile } from './others_profile';

export default function Index() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="me" element={<MyProfile />} />
          <Route path=":id" element={<OthersProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}