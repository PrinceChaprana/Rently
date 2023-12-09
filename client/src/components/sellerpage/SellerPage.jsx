import React from 'react'
import {Grid,Box,styled,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../logo/Logo'
import Products from '../products/Products'

import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import { useEffect, useState, useContext } from 'react';

const Item = styled(Box)`

`
const Container = styled(Grid)`
  position: relative;
  background: #d8d8d8;
  border-radius: 1rem;
  margin: 1%;

`

export default function SellerPage() {

  const [products, getProducts] = useState([]);
  const { account } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllProducts({ username: account.username });
      if (response.isSuccess) {
        getProducts(response.data);
        console.log(response.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item lg={2} xs={12} sm={2} style={{display:'flex',flexDirection:'column'}}>
            <Logo style={{margin:'0',width: '100%'}}/>
            <Link to='/create'><Button>Sell Product</Button></Link>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} style={{height:'100vh',overflow: 'scroll'}}>
            <Container>
              <Products products = {products}/>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}
