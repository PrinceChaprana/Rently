//Library Imports
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { styled, Box, Button, Typography, FormControl, Select, TextField, MenuItem, InputLabel, Modal } from '@mui/material';
import { Country, State, City } from 'country-state-city';
//Components
import Map from '../map/Map';
//Varibles and Data
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { UserData } from '../../constant/variable';
import { countryListWithCode } from '../../constant/data';
//CSS File
import './styles.css';


//Styled Components
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
const HalfWrapper = styled(Box)`
    width: 50vw;
    height: 100vh;
    text-align: center;
    @media screen and (max-width:426px){
      width: 100vw;
    }
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
        float: left;
        color: #000;
        font-size:16vh;
        margin-left:10vw;
        @media screen and (max-width:426px){
          display: flex;
          width: 80%;
          font-size: 10vh;
          height: 10vh;
          align-items: center;
          justify-content: center;
        }
`
const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-y: auto;
  & > div{
    margin: 1vh 1vw;
    width: 80%;
  }
  
`
const ModelContainer = styled(Box)`
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: white;
  height:84vh;
  padding: 2vh 1vh;
  width: 60vw;
  border-radius: 1rem;
  

  @media screen and (max-width:426px) {
    height: 50vh;
  }
`
const initialLogin = {
  email: '',
  password: ''
}

export default function Login({ isUserAuthenticated }) {
  let initialSignUp = UserData;

  const navigate = useNavigate();
  const { setAccount, setwishlist } = useContext(DataContext);
  //useState Variables

  const [state, setState] = useState('signup');
  const [login, setlogin] = useState(initialLogin);
  const [signup, setsignup] = useState(initialSignUp);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [coords, setCoords] = useState([28.733898510530132, 77.20300044368255]);
  const [zoom, setZoom] = useState(12);
  const [error, showError] = useState('');
  const [open, setOpen] = useState(false);

  //set all the address fields
  useEffect(() => {
    // when country is set load all the state of the respective country
    let country = Country.getCountryByCode(signup.country);
    setCoords([country?.latitude, country?.longitude]);
    console.log(coords);
    setStates(State.getStatesOfCountry(signup.country));
    setsignup({...signup,["country"]:country?.name})
    // console.log(states);
    // console.log(signup.country);
  }, [signup.country])
  useEffect(() => {
    //set cities based of the state selected
    let state = State.getStateByCodeAndCountry(signup.state, signup.country);
    setCoords([state?.latitude, state?.longitude]);
    setsignup({...signup,["state"]:state?.name})
    setZoom(9);
    setCities(City.getCitiesOfState(signup.country, signup.state));
  }, [signup.state])
  useEffect(() => {
    cities.forEach(city => {
      if (city.name === signup.city) {
        setCoords([city?.latitude, city?.longitude]);
        setZoom(12);
      }
    });
  }, [signup.city]);
  useEffect(() => {
    setsignup({ ...signup, ["latitude"]: coords[0], ["longitude"]: coords[1] });
    //console.log(signup)
  }, [coords])

  //Helper Methods
  const toggleState = () => {
    if (state === 'login') {
      setState('signup')
    } else {
      setState('login')
    }
  }
  const loginValueChange = (e) => {
    //console.log(login,error)
    if (login[e.target.name].includes(" ")) {
      showError(`Remove space in the ${e.target.name}`)
    } else {
      showError("");
    }
    setlogin({ ...login, [e.target.name]: e.target.value });
  }
  const signupValueChange = (e) => {
    //Data validation
    DataValidator(e.target.name);
    setsignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////
  // getting location using gps info

  // const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
  //   positionOptions: {
  //     enableHighAccuracy: true,
  //     maximumAge: 0,
  //   },
  //   userDecisionTimeout: 5000,
  //   watchPosition: true,
  // });
  // const getLocation = () => {
  //   !isGeolocationAvailable ? (console.log('Your browser does not support Geolocation'))
  //     : !isGeolocationEnabled ? (console.log('Geolocation is not enabled'))
  //       : coords ?
  //         setsignup({ ...signup, ['latitude']: coords.latitude, ['longitude']: coords.longitude })
  //         : console.log('Getting the data')

  //   console.log(signup);
  // }
  ////////////////////////////////////////////////////////////////////////////////////////////
  const DataValidator = (placeholder) => {
    let pincodeRegex = /^[0-9]+$/;
    if (placeholder === "email" || placeholder === "password" || placeholder === "pincode") {
      if (signup[placeholder].includes(" ")) {
        showError(`Remove space in ${placeholder}`);
      } else {
        showError("");
      }
    }
    else if (signup["pincode"].length > 6) {
      showError('length of pincode is more the 6');
    }
    else if (!pincodeRegex.test(signup["pincode"])) {
      showError('pincode must containe numbers');
    } else {
      showError('');
    }
  }
  const loginUser = async () => {
    DataValidator("email");
    if (error.length > 0) {
      showError('Please remove errors');
      return;
    }
    let response = await API.userLogin(login);
    console.log(response);
    if (response.isSuccess) {
      showError('');

      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
      setAccount(response.data.userData);
      console.log(response.data.userData)
      isUserAuthenticated(true)
      setlogin(initialLogin);
      let wishlist_data = await API.getWishlist({ email: login.email });
      setwishlist(wishlist_data?.data);

      navigate('/');
    } else {
      showError(response.msg);
    }
  }
  const signupUser = async () => {

    if (error.length > 0) {
      showError('Please remove errors');
      return;
    }

    //console.log(signup);

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
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      {
        state === 'login' ?
          <Wrapper>
            {/* Login Window */}
            <HalfWrapper className='poster' style={{ background: 'yellow' }}>
              <Heading>
                Welcome back
              </Heading>
              <SubHeading>
                Please Login to your account to continue further
              </SubHeading>
            </HalfWrapper>
            <HalfWrapper >
              <Logo style={{ margin: '20vh 10vw 1vh 10vw' }}>RentApp</Logo>
              <Typography style={{ color: "red", fontSize: "12px" }}>{error}</Typography>
              <FormWrapper>
                <TextField
                  className='input-field'
                  required
                  id="outlined-required"
                  name='email'
                  label="Email"
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
            {/* SignUp Window */}
            <HalfWrapper >
              <Logo>RentApp</Logo>
              <FormWrapper>
                <Typography style={{ color: "red", fontSize: "12px" }}>{error}</Typography>

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

                <TextField
                  id="outlined-password-input"
                  label="Address Line"
                  onChange={(e) => signupValueChange(e)}
                  name='addressline'
                  autoComplete="current-password"
                />
                <div className='city'>
                  <FormControl >
                    <InputLabel id='country'>Country</InputLabel>
                    <Select
                      labelId='country'
                      value={signup.country}
                      name='country'
                      label="Country"
                      onChange={(e) => signupValueChange(e)}
                    >
                      {
                        countryListWithCode.map(country => {
                          return <MenuItem value={country.code}>{country.name}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>

                  <FormControl >
                    <InputLabel id='state'>State</InputLabel>
                    <Select
                      labelId='state'
                      value={signup.state}
                      name='state'
                      label="State"
                      onChange={(e) => signupValueChange(e)}
                    >
                      {
                        states.length ? states.map(state => {
                          //console.log(state);
                          return <MenuItem value={state.isoCode}>{state.name}</MenuItem>
                        })
                          : <MenuItem>Select Country</MenuItem>
                      }
                    </Select>
                  </FormControl>
                </div>
                <div className='city'>
                  <TextField
                    id="outlined-password-input"
                    label="Pin Code"
                    onChange={(e) => signupValueChange(e)}
                    name='pincode'
                    autoComplete="current-password"
                  />
                  <FormControl >
                    <InputLabel id='city'>City</InputLabel>
                    <Select
                      labelId='city'
                      value={signup.city}
                      name='city'
                      label="City"
                      onChange={(e) => signupValueChange(e)}
                    >
                      {
                        cities.length ? cities.map(city => {
                          //console.log(city);
                          return <MenuItem value={city.name}>{city.name}</MenuItem>
                        })
                          : <MenuItem>Select State</MenuItem>
                      }
                    </Select>
                  </FormControl>
                </div>
                <Button varient='standard' onClick={handleOpen}>Get Location</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ModelContainer>
                    <Map setCoords={setCoords} setOpen={setOpen} setZoom={setZoom} zoom={zoom} lng={coords[1]} lat={coords[0]} />
                  </ModelContainer>
                </Modal>
                <Button variant='contained' onClick={() => signupUser()} >Sign Up</Button>
                <Typography>OR</Typography>
                <Button onClick={() => toggleState()} >Login</Button>
              </FormWrapper>
            </HalfWrapper>
            <HalfWrapper className='poster' style={{ background: 'magenta' }}>
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
