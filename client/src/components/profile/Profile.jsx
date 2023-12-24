import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, styled, Typography, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { API } from '../../service/api';
import { UserData } from '../../constant/variable'

import Products from '../products/Products'

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  padding:1vh 10vw;
  overflow: scroll;
  height:90vh;
  width: 100vw;
  @media screen and (max-width:426px){
    flex-direction: column;
  }
`
const Wrapper = styled(Box)`
width:60%;
margin: 0 40%;
  
`
const Value = styled(Box)`
display: flex;
justify-content: space-evenly;
padding:1% 1%;
width: 100%;
text-align: right;
&>label{
  font-size: medium;
  font-weight: bold;
  text-transform: capitalize;
  width:30%;
  height: 100%;
  padding-right:5%;

}
  & > div{
    width:70%;
  }
`

const AccountDetailDiv = styled(Box)`
  width:20vw;
  @media screen and (max-width:426px){
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`
const ProductsDetailDiv = styled(Box)`
  width:60vw;
  & > p {
    font-size:2rem;
    font-weight:bold;
    text-align: center;
  }
  @media screen and (max-width:426px){
    width: 100%;
  }
`

const Name = styled(Box)`
  text-transform: capitalize;
  font-size: x-large;
  font-weight: bold;
  color:#452950;
`
const Address = styled(Box)`
  font-size: small;
  text-transform: capitalize;
`
const Image = styled(Box)`
  width:20vh;
  height: 20vh;
  overflow: hidden;
  object-fit: cover;
  &>img{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  @media screen and (max-width:426px){
    border-radius: 5rem 5rem;
  }
`


export default function Profile() {
  const initUserData = UserData;
  let { username } = useParams();
  const [userData, setUserData] = useState(initUserData);
  const [products, getProducts] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      let response = await API.getUserData(username);
      setUserData(response.data);
    }
    const fetchData = async () => {
      let response = await API.getAllProducts({ username: username });
      if (response.isSuccess) {
        getProducts(response.data);
        console.log(response.data);
      }
    }
    getUserData()
    fetchData();
  }, [])

  return (
    <>
      <Container>
        <AccountDetailDiv>
          <Image>
            {
              userData.picture !== '' ?
                <img src={userData.picture} />
                :
                <AccountCircleIcon style={{ fontSize: '20vh' }} />
            }
          </Image>
          <div style={{margin:"0 1vh"}}>
            <Name>{userData.name}</Name>
            <Address>
              <div>{userData.addressline}</div>
              <div>{userData.city},{userData.state}</div>
            </Address>
          </div>
        </AccountDetailDiv>
        <ProductsDetailDiv>
          <Typography style={{borderBottom:"1px solid black",marginBottom:"1vh"}}>Products For Sell</Typography>
          <Products products={products} />
        </ProductsDetailDiv>

      </Container>
    </>
  )
}
