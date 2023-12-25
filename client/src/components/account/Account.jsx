import React, { useContext, useState } from 'react'
import { Box,styled,TextField,Button} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataContext } from '../../context/DataProvider';
import { UserData } from '../../constant/variable';

const Container = styled(Box)`
  align-items: center;
  padding:1vh 10vw;
  border: 2px solid red;
  overflow: scroll;
  width: 100%;
  height: 90vh;
  justify-content: center;
`
const Image = styled(Box)`
  height: 30vh;
  width: 30vh;
  margin: auto;
  border: 1px solid red;
  border-radius: 10rem 10rem;
  overflow: hidden;
  margin-bottom:1vh;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
const Value = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-top: 1px solid black;
  padding: 1vh 0;
  &>div{
    color:black;
  }
`
const UpdateButton = styled(Button)`
  width: 100%;
  
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);height: 50px;
  text-align: center;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  color: white; 
`

export default function Account() {
  
  const {account} = useContext(DataContext);
  const {userData,setUserData} = useState(UserData);

  return (
    <>
    <Container>
            <Image>
            {
              account.picture !== '' ?
                <img src={account.picture}/>
                :
                <AccountCircleIcon style={{ fontSize: '30vh' }} />
            }
          </Image>
          <Value>
            <h4>Name</h4>
            <TextField placeholder={account.name}/> 
          </Value>
          <Value>
            <h4>Address</h4>
            <TextField placeholder={account.addressline}/> 
          </Value>
          <Value>
            <h4>City</h4>
            <TextField placeholder={account.city}/> 
          </Value>
          <Value>
            <h4>State</h4>
            <TextField placeholder={account.state}/> 
          </Value>
          <Value>
            <h4>Country</h4>
            <TextField placeholder={account.country}/> 
          </Value>
          <Value>
            <h4>Pin Code</h4>
            <TextField placeholder={account.pincode}/> 
          </Value>
          <UpdateButton>Update</UpdateButton>
    </Container>
    </>
  )
}
