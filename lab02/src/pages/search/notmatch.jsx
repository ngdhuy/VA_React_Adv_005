import React from "react";
import { Link } from "react-router-dom";

export default function NotMatch(props) {
  return(
    <div>
      <h1>Error 404 - File/pages not found</h1>
      <div>
        <Link to="/search">Go to searching page</Link>
      </div>
    </div>
  );
}