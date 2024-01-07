import React, { useContext, useEffect, useState } from 'react'
import SwiperProduct from '../swiperProductView/SwiperProduct'
import { DataContext } from '../../context/DataProvider'
import { API } from '../../service/api'

import {Box,styled}from '@mui/material'
import { LocationDefault } from '../../constant/variable'
import SearchBar from '../searchbar/SearchBar'
import ShopByCategory from '../shopby/ShopByCategory'
import { Link } from 'react-router-dom'

const Container = styled(Box)`
  padding: 0 1vw;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
`


export default function Home({ isAuthenticated }) {

  const location = LocationDefault;

  const { account } = useContext(DataContext);
  const [nearbyProducts, setNearbyProducts] = useState([]);
  const [cityProduct, setCityProdcuts] = useState([]);



  useEffect(() => {
    const getNearbyProducts = async () => {
      const response = await API.getAllProducts({city:account.city||location.city});
      if (response.isSuccess) {
        setNearbyProducts(response.data);
        //console.log(response.data);
      }
    }
    const getCityProducts = async () => {
      const response = await API.getAllProducts({ city: account.city || location.city });
      if (response.isSuccess) {
        setCityProdcuts(response.data);
        //console.log(response.data);
      }
    }
      getNearbyProducts();
      getCityProducts();
  }, []);
  return (
    <div style={{ height: '90vh', overflowY: 'scroll', padding: '1vh 0' }}>
      <Link to='/map'>helllo</Link>
      <ShopByCategory/>
      <Container>
        <label>Products Near You</label>
        <SwiperProduct products={nearbyProducts} />
      </Container>
      <Container>
        <label>Products From {account.city||location.city}</label>
      <SwiperProduct products={cityProduct} />
      </Container>
      
    </div>
  )
}
