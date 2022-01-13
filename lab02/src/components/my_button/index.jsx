import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButton(props) {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/profile/888');
  };
  return <button onClick={handleClick}>Submit</button>;
}