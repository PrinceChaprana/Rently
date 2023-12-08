import { useEffect, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { Grid, Box } from '@mui/material';
import { API } from '../../service/api';

import Product from './Product';
import { DataContext } from '../../context/DataProvider';


export default function Products() {
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
    {
      products?.length ? products.map(post => (
        <Grid item lg={3} sm={4} xs={12} >          
            <Product product={post} />
        </Grid>
      )) : <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
        No product for sell
      </Box>}
    </Grid>
    </>
  )
}
