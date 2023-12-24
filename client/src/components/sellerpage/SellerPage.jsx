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
  margin: 1vh 1vw;
  height: 88vh;
  overflow: scroll;
`
const AddButton = styled(Link)`
  margin: 15% 0 0 15%;
  font-weight: bold;
  border-radius: 5rem;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  @media screen and (max-width:426px){
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    margin-bottom: 10px;
  }
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
        <Grid item lg={2} xs={12} sm={2} style={{display:'flex',background:"transparent",flexDirection:'column'}}>
            <AddButton to='/create' style={{textDecoration:'none',width:'80%',textAlign:'center',padding:'1vh 0'}}>Add Product</AddButton>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} style={{height:'100vh'}}>
            <Container>
              <div style={{width:'100%',textAlign:'center',fontSize:'2rem',color:'#551a8b',fontWeight:'bold',borderBottom:"1px solid #c7c7c7",marginBottom:"1vh" }}>MY PRODUCTS</div>
              <Products products={products}/>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}
