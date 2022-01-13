import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import NotMatch from "./notmatch";
import SearchHome from "./search_home";

export default function Search() {
  return(
    <div>
      <h1>Searching page</h1>

      <Routes>
        <Route path="/" element={<SearchHome />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}