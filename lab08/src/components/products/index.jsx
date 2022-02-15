import React from 'react'
import { ref, child, get } from 'firebase/database';
import { db } from '../../util/firebase-connect';
import { async } from '@firebase/util';



export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products:[]
    }
  }

  componentDidMount() {
    let products = this.loadData();
    console.log(products);
    this.setState({products});
  }

  loadData = async () => {
    const dbRef = ref(db);
    let products = [];
    await get(child(dbRef, 'products'))
      .then(data => {
        if(data.exists()) {
          products = data.val()
        }
        else
          console.log('No data');
      })
      .catch(error => {
        console.error(error);
      })
  
    return products;
  }
  
  render() {
    return (
      <div>
        <div>Products</div>
        {this.state.products.map(p => <div>{p.name} - {p.price}</div>)}
      </div>
    )
  }
}
