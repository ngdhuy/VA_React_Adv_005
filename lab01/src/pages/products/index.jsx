import { Routes, Route } from 'react-router-dom';

import { Product } from './product';
import { NewProductForm } from './new-product-form';
import { List } from './list';

export function Products() {
  return(
    <>
      <h1>Products</h1>
      <Routes>
        <Route>
          <Route path=":productID" element={<Product />} />
          <Route path="new" element={<NewProductForm />} />
          <Route index element={<List />} />
        </Route>
      </Routes>
    </>
  );
} 