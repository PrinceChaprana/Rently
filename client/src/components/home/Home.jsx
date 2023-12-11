import React, { useContext, useEffect, useState } from 'react'
import CategoryGrid from '../category/CategoryGrid'
import SwiperProduct from '../swiperProductView/SwiperProduct'
import { DataContext } from '../../context/DataProvider'
import { API } from '../../service/api'

import {Box,styled}from '@mui/material'

const Container = styled(Box)`
  padding: 0 1vw;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
`

export default function Home({ isAuthenticated }) {

  const { account } = useContext(DataContext);
  const [nearbyProducts, setNearbyProducts] = useState([]);
  const [cityProduct, setCityProdcuts] = useState([]);


  useEffect(() => {
    const getNearbyProducts = async () => {
      const response = await API.getAllProducts({ pincode: account.pincode });
      if (response.isSuccess) {
        setNearbyProducts(response.data);
        console.log(response.data);
      }
    }
    const getCityProducts = async () => {
      const response = await API.getAllProducts({ city: account.city });
      if (response.isSuccess) {
        setCityProdcuts(response.data);
        console.log(response.data);
      }
    }
    getNearbyProducts();
    getCityProducts();
  }, []);
  return (
    <div style={{ height: '90vh', overflowY: 'scroll', padding: '1vh 0' }}>
      <Container>
        <label>Products Near You</label>
        <SwiperProduct products={nearbyProducts} />
      </Container>
      <Container>
        <label>Products From {account.city}</label>
      <SwiperProduct products={cityProduct} />
      </Container>
    </div>
  )
}
