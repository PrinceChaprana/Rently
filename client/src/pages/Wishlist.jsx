import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'
import Products from '../components/products/Products';

import { API } from '../service/api'

export default function Wishlist() {
  const { account } = useContext(DataContext);
  const [wishlist, setWishlist] = useState([]);
  let [products,setproducts] = useState([]);
  let loading = false;

  useEffect(() => {
    const getWishlist = async () => {
      let response = await API.getWishlist({ email: account.email });
      if (response.isSuccess) {
        setproducts(response.data);
      }
    }
    getWishlist();
    console.log(products.length);
  }, []);


  return (
    <div style={{padding:"1vh",overflowY:'scroll',height:"90vh"}}>
      <div style={{width:"100vw",textAlign:"center",fontSize:"5vh",fontWeight:"bold",color:"#551a8b"}}>
        <label>Wishlist</label>
      </div>
      {
        products.length > 0 ?
          <Products products={products} />
        :<div>No products</div>
      }
    </div>
  )
}
