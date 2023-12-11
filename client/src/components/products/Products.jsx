
import { Grid, Box } from '@mui/material';

import Product from './Product';
import {useEffect,useContext,useState} from 'react';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';

export default function Products() {
  
  const [products, getProducts] = useState([]);
  const { account } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllProducts({ username: account.email });
      if (response.isSuccess) {
        getProducts(response.data);
        console.log(response.data);
      }
    }
    console.log(account)
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
