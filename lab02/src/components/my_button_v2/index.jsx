import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButtonV2(props)  {
  let navigate = useNavigate();
  const handleClick = () => { 
    navigate('/profile/999', {replace: true});
    // navigate('/profile/6666', {state: state});
  }
  return <button onClick={handleClick}>Submit 2</button>
}