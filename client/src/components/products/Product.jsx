import React from 'react'
import {Box,styled,Typography,Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../service/api';
import { useNavigate } from 'react-router-dom'

const Container = styled(Box)`
  margin:1vw 1vw;
  background: white;
  border-radius: 1rem;
  &>div>button{
    position: relative;
    float:right;
  }
`
const Image = styled('img')({
  objectFit:'cover',
  width:'100%',
  height:'40vh',
  borderRadius:'1rem'
});
const Heading = styled(Typography)`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`
 
export default function Product({product}) {
  const navigate = useNavigate();

  const deletePost = async() => {
    console.log(product._id);
    let res = await API.deletePost(product._id);
    navigate('/sell')
  }
  return (
    <Container>
      <Image src={product.picture}/>
      <div style={{margin:'5%'}}>
        <Button onClick={()=>deletePost()}><DeleteIcon/></Button>
        <Heading >{product.name}</Heading>
        <Typography style={{fontSize:'1.5rem'}} >₹{product.price}</Typography>
        <Typography >{product.category}</Typography>
        <Typography >{product.postDate}</Typography>
      </div>
    </Container>
  )
}
