import { useContext, useEffect } from 'react'
import { Box, styled, Typography, Button } from '@mui/material'
import { API } from '../../service/api';
import { useNavigate, useLocation ,Link} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled(Box)`
  
  margin:1vw 1vw;
  background: white;
  border-radius: 1rem;
  text-align: left;;
  &>div>button{
    position: relative;
    float:right;
  }
`
const Image = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '30vh',
  borderRadius: '1rem'
});
const Heading = styled(Box)`
  font-size: 1.2rem;
  color:#0a0235;
  width:100%;
  max-height:4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
const TimeWrapper = styled(Typography)`
  font-size:.7rem;
  width: 30%;
  text-align: end;
`

const AddressWrapper = styled(Typography)`
  font-size: .9rem;
  width:70%;
`
const Typography1 = styled(Typography)`
  text-align: left;
`

const UserName = styled(Link)`
  display: flex;
  font-size: .9rem;
  flex-direction: row;
  color:violet;
  text-decoration: none;
`

export default function Product({ product }) {
  const navigate = useNavigate();
  const { account } = useContext(DataContext);
  const location = useLocation();

  const deletePost = async () => {
    console.log(product._id);
    let res = await API.deletePost(product._id);
    navigate('/sell')
  }
  const CalculateDate = () => {
    let date = product.postDate;
    let date2 = new Date(date);
    let date3 = new Date();
    let diff = Math.abs(date3 - date2);
    let sec = Math.round(diff / 1000);
    let min = Math.round(sec/60);
    let hour = Math.round(min /60);
    let days = Math.round(hour/24);
    if(days !==0) return days.toString()+' days';
    else if(hour!==0) return hour.toString()+' hours';
    else if(min!==0) return min.toString()+' min';
    return sec.toString()+' sec';
    }
  return (
    <Container>
      <IconWrapper>
        <IconContainer>
              {/*all the like and adding buttons*/}
          <FavoriteBorderIcon onClick={() => deletePost()} />
        </IconContainer>
      </IconWrapper>
      <Image src={product.picture} />
      <div style={{ margin: '5%' }}>
        <UserName><AccountCircleIcon/><div onClick={()=>{navigate(`/profile/${product.username}`)}}>{product.username}</div></UserName>
        <Heading >{product.name}</Heading>
        <Typography1 style={{ fontSize: '1.5rem',fontWeight:'bold' }} >₹{product.price}</Typography1>
        <Typography1 >{product.category}</Typography1>
        <div style={{display:'flex',flexDirection:'row',color:'#646464',marginBottom:'1vh'}}>
          <AddressWrapper>{product.city},{product.state}</AddressWrapper>
          <TimeWrapper >{CalculateDate()} ago</TimeWrapper>
        </div>
      </div>
    </Container>
  )
}
