import { useContext, useEffect } from 'react'
import { Box, styled, Typography, Button } from '@mui/material'
import { API } from '../../service/api';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LocationDefault } from '../../constant/variable';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;

  margin:1vw 1vw;
  border-radius: 1rem;
  text-align: left;
  background: white;
  height: 50vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &>div>button{
    position: relative;
    float:right;
  }
`
const ImageWrapper = styled(Box)`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;

`
const Image = styled('img')({
  objectFit: 'scale-down',
  width: '100%',
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
  font-size: 70%;
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
const DistanceWrapper = styled(Typography)`

`

export default function Product({ product }) {
  const navigate = useNavigate();
  const { account } = useContext(DataContext);
  const location = useLocation();

    const CalculateDate = () => {
      let date = product.postDate;
      let date2 = new Date(date);
      let date3 = new Date();
      let diff = Math.abs(date3 - date2);
      let sec = Math.round(diff / 1000);
      if (sec < 60) return sec.toString() + ' sec';
      let min = Math.round(sec / 60);
      if (min < 60) return min.toString() + ' min';
      let hour = Math.round(min / 60);
      if (hour < 60) return hour.toString() + ' hours';
      let days = Math.round(hour / 24);
      return days.toString() + ' days';
    };



  const deletePost = async () => {
    console.log(product._id);
    let res = await API.deletePost(product._id);
    navigate('/sell')
  }

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return Math.round(d);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  const CalculateDistance = () => {
    let latitude = product.location.coordinates[1];
    let longitude = product.location.coordinates[0];
    let latitude1 = account.latitude || LocationDefault.latitude;
    let longitude1 = account.longitude || LocationDefault.longitude;
    const dist = getDistanceFromLatLonInKm(latitude, longitude, latitude1, longitude1);
    console.log(product);
    return dist.toString() + ' KM away';
  }
  return (
    <Container>
      <IconWrapper>
        <IconContainer>
          {/*all the like and adding buttons*/}
          <FavoriteBorderIcon onClick={() => deletePost()} />
        </IconContainer>
      </IconWrapper>
      <ImageWrapper>
        <Image src={product.picture} />
      </ImageWrapper>
      <div style={{ margin: '5%' }}>
        <UserName><AccountCircleIcon /><div onClick={() => { navigate(`/profile/${product.username}`) }}>{product.username}</div></UserName>
        <Heading >{product.name}</Heading>
        <Typography1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} >₹{product.price}</Typography1>
        <Typography1 >{product.category}</Typography1>
        <div style={{ display: 'flex', flexDirection: 'row', color: '#646464', marginBottom: '1vh' }}>
          <AddressWrapper>{product.city},{product.state}</AddressWrapper>
          <TimeWrapper >{CalculateDate()} ago</TimeWrapper>
        </div>
        <DistanceWrapper>{CalculateDistance()}</DistanceWrapper>
      </div>
    </Container>
  )
}
