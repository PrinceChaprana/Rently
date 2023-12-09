import { useContext } from 'react'
import { Box, styled, Typography, Button } from '@mui/material'
import { API } from '../../service/api';
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
  objectFit: 'cover',
  width: '100%',
  height: '40vh',
  borderRadius: '1rem'
});
const Heading = styled(Typography)`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`
const IconContainer = styled(Box)`
  position: absolute;
  right:0;
  margin:5% 5%;
  width:24px;
  height: 24px;
`
const IconWrapper = styled(Box)`
  position: relative;
  width:100%;
  height: 100%;
`

export default function Product({ product }) {
  const navigate = useNavigate();
  const { account } = useContext(DataContext);

  const deletePost = async () => {
    console.log(product._id);
    let res = await API.deletePost(product._id);
    navigate('/sell')
  }
  return (
    <Container>
      <IconWrapper>
        <IconContainer>
          {
            product.username === account.username ?
              <Button onClick={() => deletePost()}><DeleteIcon /></Button>
              :
              //all the like and adding buttons
              <FavoriteBorderIcon onClick={() => console.log('hello')} />
          }
        </IconContainer>
      </IconWrapper>
      <Image src={product.picture} />
      <div style={{ margin: '5%' }}>
        <Heading >{product.name}</Heading>
        <Typography style={{ fontSize: '1.5rem' }} >₹{product.price}</Typography>
        <Typography >{product.category}</Typography>
        <Typography >{product.postDate}</Typography>
      </div>
    </Container>
  )
}
