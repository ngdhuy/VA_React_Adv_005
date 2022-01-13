import React from "react";

import { 
  Link, 
  Outlet
} from "react-router-dom";

import MyButton from "../components/my_button";
import MyButtonV2 from "../components/my_button_v2";
import MyButtonV3 from "../components/my_button_v3";

export function Profile(props) {
  return(
    <div>
      <nav>
        <Link to="me">My profile</Link>
      </nav>
      <MyButton />
      <MyButtonV2 />
      <MyButtonV3 />
      <Outlet />
    </div>
  );
}