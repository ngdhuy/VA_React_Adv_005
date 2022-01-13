import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButtonV3(props) {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-2)}>Go 2 pages previous</button>
      <button onClick={() => navigate(-1)}>Go 1 pages previous</button>
      <button onClick={() => navigate(1)}>Next 1 pages</button>
      <button onClick={() => navigate(2)}>Next 2 pages</button>
    </div>
  );
}