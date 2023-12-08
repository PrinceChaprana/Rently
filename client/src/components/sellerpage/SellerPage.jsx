import React from 'react'
import {Grid,Box,styled,Button} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../logo/Logo'
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
            <Logo style={{margin:'0',width: '100%'}}/>
            <Link to='/create'><Button>Sell Product</Button></Link>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} style={{height:'100vh',overflow: 'scroll'}}>
            <Container>
              <Products/>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}
