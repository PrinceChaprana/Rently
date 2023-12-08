import React, { useState,useContext } from 'react';
import { styled, Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useGeolocated } from 'react-geolocated';
import {useNavigate} from 'react-router-dom'
import { API } from '../../service/api';

import { DataContext } from '../../context/DataProvider';

import './styles.css';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;

`

const HalfWrapper = styled(Box)`
    width: 50vw;
    height: 100vh;
    text-align: center;
`

const Heading = styled(Box)`
  width: 100%;
  padding-top:40% ;
  padding-bottom: 1vh;
  font-size: 4rem;
  font-weight: bold;
`
const SubHeading = styled(Box)`
  font-size: 20px;
`
const Logo = styled(Box)`
        font-family: 'Whisper', cursive;
        display: flex;
        margin: 20vh 10vw 1vh 10vw;
        float: left;
        color: #000;
        font-size:16vh;
`

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  & > div{
    margin: 1% 1%;
    width: 80%;

  }
  & > button, & > p{
    margin: 1% 1%;
  }

`


const initialSignUp = {
  email: '',
  name: '',
  password: '',
  latitude: '',
  longitude: ''
}

const initialLogin = {
  username: '',
  password: ''
}

export default function Login({isUserAuthenticated}) {

  const [state, setState] = useState('login');
  const [login, setlogin] = useState(initialLogin);
  const [signup, setsignup] = useState(initialSignUp);
  const [error, showError] = useState('');
  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();
    
    

  const toggleState = () => {
    if (state === 'login') {
      setState('signup')
    } else {
      setState('login')
    }
  }

  const loginValueChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  }
  const signupValueChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  }

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      maximumAge: 0,
    },
    userDecisionTimeout: 5000,
    watchPosition: true,
  });

  const getLocation = () => {
    !isGeolocationAvailable ? (console.log('Your browser does not support Geolocation'))
      : !isGeolocationEnabled ? (console.log('Geolocation is not enabled'))
        : coords ?
          setsignup({ ...signup, ['latitude']: coords.latitude, ['longitude']: coords.longitude })
          : console.log('Getting the data')

    console.log(signup);
  }

  const loginUser = async() => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
        showError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username });
        console.log(response.data.username);
        isUserAuthenticated(true)
        setlogin(initialLogin);
        navigate('/');
    } else {
        showError('Something went wrong! please try again later');
    }
  }
  const signupUser = async() => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
        showError('');
        setsignup(initialSignUp);
        toggleState('login');
    } else {
        showError('Something went wrong! please try again later');
    }
  }

  //model handler
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      {
        state === 'login' ?
          <Wrapper>
            <HalfWrapper style={{ background: 'yellow' }}>
              <Heading>
                Welcome back
              </Heading>
              <SubHeading>
                Please Login to your account to continue further
              </SubHeading>
            </HalfWrapper>
            <HalfWrapper>
              <Logo>RentApp</Logo>
              <FormWrapper>
                <TextField
                  required
                  id="outlined-required"
                  name='username'
                  label="Username"
                  onChange={(e) => loginValueChange(e)}
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  name='password'
                  type="password"
                  onChange={(e) => loginValueChange(e)}
                  autoComplete="current-password"
                />
                <Button variant='contained' onClick={() => loginUser()} >Login</Button>
                <Typography>OR</Typography>
                <Button onClick={() => toggleState()}>Sign Up</Button>
              </FormWrapper>
            </HalfWrapper>
          </Wrapper>
          :
          <Wrapper>
            <HalfWrapper>
              <Logo>RentApp</Logo>
              <FormWrapper>
                <TextField
                  required
                  id="outlined-required"
                  name='email'
                  onChange={(e) => signupValueChange(e)}
                  label="Email"
                />
                <TextField
                  required
                  id="outlined-required"
                  onChange={(e) => signupValueChange(e)}
                  name='name'
                  label="Name"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  onChange={(e) => signupValueChange(e)}
                  name='password'
                  type="password"
                  autoComplete="current-password"
                />
                <Button varient='standard' onClick={() => getLocation()}>Get Location</Button>

                <Button variant='contained' onClick={() => signupUser()} >Sign Up</Button>
                <Typography>OR</Typography>
                <Button onClick={() => toggleState()} >Login</Button>
              </FormWrapper>
            </HalfWrapper>
            <HalfWrapper style={{ background: 'magenta' }}>
              <Heading>
                Hello There!
              </Heading>
              <SubHeading>
                Please Sign Up to fully expreience the website
              </SubHeading>
            </HalfWrapper>
          </Wrapper>
      }
    </>
  )
}
