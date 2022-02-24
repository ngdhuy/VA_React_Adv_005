import React, { useState, useEffect } from "react";
import axios from "axios";

const url = 'http://localhost:3001';

export default function Products(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // call api
    axios.get(url).then(res => {
      setProducts(res.data);
    })
  },[]);

  if(products)
    console.log(products);
  else
    return null;

  return(
    <div>
      {
        products.map(p => (
          <p key={p.id}>{p.id} - {p.name} - {p.price}</p>
        ))
      }
    </div>
  );
}