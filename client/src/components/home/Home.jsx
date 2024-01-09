import { useContext, useEffect, useState } from 'react'
import {Box,styled}from '@mui/material'
//Constants
import { DataContext } from '../../context/DataProvider'
import { API } from '../../service/api'
import { LocationDefault } from '../../constant/variable'
//Components
import SwiperProduct from '../swiperProductView/SwiperProduct'
import ShopByCategory from '../shopby/ShopByCategory'

//Styled Components
const Container = styled(Box)`
  padding: 0 1vw;
  font-weight: bold;
  text-transform: uppercase;
`
const Title = styled(Box)`
    height:5vh;
    font-size: 31px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1vh;
    @media screen and (max-width:426px) {
        font-size: 5vw;
    }
`

export default function Home({ isAuthenticated }) {
  //init value
  const location = LocationDefault;
  //state variables
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
      <ShopByCategory/>
      <Container>
        <Title>Products Near You</Title>
        <SwiperProduct products={nearbyProducts} />
      </Container>
      <Container>
        <Title>Products From {account.city||location.city}</Title>
      <SwiperProduct products={cityProduct} />
      </Container>
    </div>
  )
}
