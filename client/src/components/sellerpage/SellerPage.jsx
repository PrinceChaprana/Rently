import React from 'react'
import {Grid,Box,styled,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import Products from '../products/Products'

const Item = styled(Box)`

`
const Container = styled(Grid)`
  position: relative;
  background: #d8d8d8;
  border-radius: 1rem;
  margin: 1%;

`

export default function SellerPage() {

  return (
    <>
      <Grid container>
        <Grid item lg={2} xs={12} sm={2} style={{display:'flex',flexDirection:'column'}}>
            <Link to='/create' style={{textDecoration:'none',color:'black',margin:'15%',width:'80%',textAlign:'center',background:'blue',borderRadius:'1rem',padding:'1vh 0'}}>Add Product</Link>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} style={{height:'100vh',overflow: 'scroll'}}>
            <Container>
              <div style={{width:'100%',textAlign:'center',fontSize:'2rem',color:'#511a1b',fontWeight:'bold'}}>MY PRODUCTS</div>
              <Products/>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}
