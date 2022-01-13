import React from "react";
import { useSearchParams } from "react-router-dom";

var users = ["Mr Buoi", "Ms Man", "Mrs Oi", "Mr Cam", "Mr Truc"];

export default function SearchHome(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  let user = searchParams.get("user");
  
  // call Searching API
  let result = users.find(item => item === user);
  
  const HandleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let keyword = formData.get("user");
    setSearchParams({ user: keyword });
  }

  return(
    <div>
      <hr />
      <h1>Search result</h1>
      <form onSubmit={HandleSubmit}>
        <input type="text" name="user" />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>{result}</h2>
      </div>
    </div>
  );
  
}

