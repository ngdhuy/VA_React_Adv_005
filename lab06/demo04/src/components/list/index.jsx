import React, { Component } from "react";
import { Product } from "../product";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }    
  }

  componentDidMount() {
    fetch('http://localhost:3002/product')
      .then(result => result.json())
      .then(product_json =>
        this.setState({
          items: product_json
        })  
      )
  }

  render() {
    return (
      <div>
        <h1>List of Product</h1>
        {this.state.items.map(p => (
          <Product id={p.id} name={p.name} price={p.price} category={p.category} key={p.id} />  
        ))}
      </div>
    );
  }
}