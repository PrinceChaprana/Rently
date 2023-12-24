import React, { useContext,useEffect } from 'react'
import { DataContext } from '../context/DataProvider'

export default function Wishlist() {
    const {account} = useContext(DataContext);
    useEffect(()=>{
        const getWishlist = async()=>{

        }
        getWishlist();
    },[]);
  return (
    <div>

    </div>
  )
}
