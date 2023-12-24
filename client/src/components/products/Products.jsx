
import { Grid, Box,styled } from '@mui/material';

import Product from './Product';

const Container = styled(Box)`
  width: 100%;
  height: 80vh;
`

export default function Products({products}) {
 
  return (
    <Container>
    <Grid container>
    {
      products?.length ? products.map(post => (
        <Grid item lg={3} sm={3} xs={6} >          
            <Product product={post} />
        </Grid>
      )) : <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
        No product for sell
      </Box>}
    </Grid>
    </Container>
  )
}
