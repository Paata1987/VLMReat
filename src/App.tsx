import axios from 'axios';
import React, {createElement as e, useEffect, useState} from 'react';
import './App.css';
import {Product} from './components/product'
import {products} from './data/products'
import { IProduct } from './models';

function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  const [loading, setLoading] = useState(false)



//Asynch fetch /Get data 
 async function fetchProducts() {
   setLoading(true)
   const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
   setProducts(response.data)
   setLoading(false)
 }


  useEffect(()=>{
    fetchProducts();
  }, [])



  return (
    <div className="container mx-auto max-w-2xl pt-5" >
      {loading && <p className="text-ceneter">Loading....</p>}
      { products.map(product => <Product product={product} key={product.id} /> )}

      {/* <Product product={ products[0]}/>
      <Product product={ products[1]}/> */}
    </div>
  );
}

export default App;
