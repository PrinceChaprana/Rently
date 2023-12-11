import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Box, styled, Typography, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';


const Container = styled(Box)`
  margin:1vh 20%;
  width: 60vw;
  padding:1% 1%;
  background:#c3c3c3;
  display: flex;
  flex-direction: column;
  align-items:center;
  overflow-y: scroll;
  scroll-behavior:smooth;
  height:85vh;
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
  &>div{
    width:70%;
  }

`

const initUserData = {
  email: '',
  name: '',
  password: '',
  latitude: '',
  longitude: '',
  addressline: '',
  city: '',
  state: '',
  country: '',
  pincode: ''
}

function Profile() {
  const { username } = useParams();
  const [userData, setUserData] = useState(initUserData);

  useEffect(() => {
    const getUserData = async () => {
      let response = await API.getUserData(username);
      setUserData(response.data);
    }
    getUserData()
  }, [])
  const uploadPhoto = async () => {

  }
  return (
    <>
      <Container>
        <div>
          <AccountCircleIcon style={{ fontSize: '30vh' }} />
          <EditIcon onClick={uploadPhoto} style={{ borderRadius: '1rem', fontSize: '32px', padding: '5px', color: 'white', background: '#342412' }} />
        </div>
        <Wrapper>
          <Value>
            <label>Name</label>
            <TextField value={userData.name} />
          </Value>
          <Value>
            <label>email/username</label>
            <TextField value={userData.email} />
          </Value>
          <Value>
            <label>Address</label>
            <TextField value={userData.addressline} />
          </Value>
          <Value>
            <label>City</label>
            <TextField value={userData.city} />
          </Value>
          <Value>
            <label>Pin Code</label>
            <TextField value={userData.pincode} />
          </Value>
          <Value>
            <label>State</label>
            <TextField value={userData.state} />
          </Value>
          <Value>
            <label>Country</label>
            <TextField value={userData.country} />
          </Value>
          <Button>Update</Button>
          sdfsfds
        </Wrapper>
        sdfsf
      </Container>
    </>
  )
}

export default function Account() {
  const [file, setFile] = useState('');
  const picture = '';
  useEffect(() => {
    const getImage = async () => {
            if (file) {
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file", file);

                    const response = await API.uploadFile(data);
                    picture = response.data;
            }
    }
    getImage();
}, [file])
  return (
    <div>
      <div  >
        <label htmlFor='fileinput'>
          <InsertPhotoIcon />
        </label>
        <input type='file'
          id='fileinput'
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  )
}
