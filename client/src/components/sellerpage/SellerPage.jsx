import React from 'react'
import {Grid,Box,styled,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import Products from '../products/Products'
import {useEffect,useContext,useState} from 'react';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';

const Item = styled(Box)`

`
const Container = styled(Grid)`
  position: relative;
  margin: 1%;
`

export default function SellerPage() {
 
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
        <Grid item lg={2} xs={12} sm={2} style={{display:'flex',flexDirection:'column'}}>
            <Link to='/create' style={{textDecoration:'none',color:'black',margin:'15%',width:'80%',textAlign:'center',background:'blue',borderRadius:'1rem',padding:'1vh 0'}}>Add Product</Link>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} style={{height:'100vh'}}>
            <Container>
              <div style={{width:'100%',textAlign:'center',fontSize:'2rem',color:'#511a1b',fontWeight:'bold'}}>MY PRODUCTS</div>
              <Products products={products}/>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}
