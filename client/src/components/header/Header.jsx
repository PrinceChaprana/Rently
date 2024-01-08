import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { styled, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from '../searchbar/SearchBar';
import Login from '../login/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataContext } from '../../context/DataProvider';
import { UserData } from '../../constant/variable';
import { getAccessToken } from '../../utils/common-utils';
import { API } from '../../service/api';

import './header.css';


const Container = styled(Box)`
        width: 100vw;
        height: 10vh;
        display: flex;
        align-items: center;
        @media screen and (max-width:426px) {
                display: block;
                height: 15vh;   
        }
`
const LoginWrapper = styled(Box)`
        padding: 1%;
        color: black;
        &>a{
                text-decoration: none;
                color: red;
        }
        @media screen and (max-width:426px ) {
                position: absolute;
                top:0;
                right: 0;

        }
`

const Logo = styled(Link)`
        text-decoration: none;
        font-family: 'Whisper', cursive;
        width: 20vw;
        text-align: center;
        color:black;
        font-size:5vh;
        @media screen and (max-width:426px ) {
                width: 100%;
                display: block;
        }
`
const SearchbarWrapper = styled(Box)`
        width:100%;
        display: flex;
        &>div{
                width: 100%;
        }
        @media screen and (max-width:426px) {
                padding:1vh 5vw 0 5vw;
        }

`

const UserIcon = styled(AccountCircleIcon)`
        font-size: 3rem;
        width: 15vw;
`
const UsernameWrapper = styled(Button)`
        display: flex;
        flex-direction: column;
        position: relative;
        float: right;
        width: 100%;
        &>div{
                font-size: 1vw;
                overflow: hidden;
                white-space: wrap;
                text-overflow: ellipsis;
        }
        
`


export default function Header({ isAuthenticated, isUserAuthenticated }) {

        const { account, setAccount } = useContext(DataContext);
        //drop down menu of user icon
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
                setAnchorEl(null);
        };
        const logout = async () => {
                let accesstoken = getAccessToken().split(' ')[1];
                console.log(accesstoken);
                await API.logout({ token: accesstoken });
                isUserAuthenticated(false);
                setAccount(UserData);
                sessionStorage.removeItem('refreshToken');
                sessionStorage.removeItem('accessToken');
                handleClose();
        }

        function header() {
                return (
                        <Container>
                                <Logo to='/'>RentApp</Logo>
                                <SearchbarWrapper ><SearchBar /></SearchbarWrapper>
                                {
                                        isAuthenticated ?
                                                <div >
                                                        <UsernameWrapper
                                                                id="basic-button"
                                                                aria-controls={open ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                onClick={handleClick}
                                                        >
                                                                <UserIcon />
                                                                <div>{account.name}</div>
                                                        </UsernameWrapper>
                                                        <Menu
                                                                id="basic-menu"
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleClose}
                                                                MenuListProps={{
                                                                        'aria-labelledby': 'basic-button',
                                                                }}
                                                        >
                                                                <MenuItem onClick={handleClose}><Link to={`/profile/${account.email}`} style={{ textDecoration: 'none' }}>Profile</Link></MenuItem>
                                                                <MenuItem onClick={handleClose}><Link to='/account' style={{ textDecoration: 'none' }}>My account</Link></MenuItem>
                                                                <MenuItem onClick={handleClose}><Link to='/sell' style={{ textDecoration: 'none' }}>Sell</Link></MenuItem>
                                                                <MenuItem onClick={handleClose}><Link to='/wishlist' style={{ textDecoration: 'none' }}>Wishlist</Link></MenuItem>

                                                                <MenuItem onClick={() => logout()}>Logout</MenuItem>
                                                        </Menu>
                                                </div>
                                                :
                                                <Link to={'/login'} style={{ textDecoration: 'none', width: '10vw', fontSize: '2vw', color: 'white' }}>Login / Sign Up</Link>
                                }
                        </Container>
                )
        }



        return (
                <>
                        <Container>
                                <Logo to='/'>RentApp</Logo>
                                <SearchbarWrapper>
                                        <SearchBar />
                                </SearchbarWrapper>
                                <LoginWrapper>
                                        {
                                                isAuthenticated ?
                                                        <div >
                                                                <UsernameWrapper
                                                                        id="basic-button"
                                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                                        aria-haspopup="true"
                                                                        aria-expanded={open ? 'true' : undefined}
                                                                        onClick={handleClick}
                                                                >
                                                                        <UserIcon />
                                                                        <div>{account.name}</div>
                                                                </UsernameWrapper>
                                                                <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                                'aria-labelledby': 'basic-button',
                                                                        }}
                                                                >
                                                                        <MenuItem onClick={handleClose}><Link to={`/profile/${account.email}`} style={{ textDecoration: 'none' }}>Profile</Link></MenuItem>
                                                                        <MenuItem onClick={handleClose}><Link to='/account' style={{ textDecoration: 'none' }}>My account</Link></MenuItem>
                                                                        <MenuItem onClick={handleClose}><Link to='/sell' style={{ textDecoration: 'none' }}>Sell</Link></MenuItem>
                                                                        <MenuItem onClick={handleClose}><Link to='/wishlist' style={{ textDecoration: 'none' }}>Wishlist</Link></MenuItem>

                                                                        <MenuItem onClick={() => logout()}>Logout</MenuItem>
                                                                </Menu>
                                                        </div>
                                                        :
                                                        <Link to={'/login'} style={{ }}>Login</Link>
                                        }
                                </LoginWrapper>
                                
                        </Container>
                </>
        )
}
