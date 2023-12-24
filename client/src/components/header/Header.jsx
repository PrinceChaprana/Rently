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



const Container = styled(Box)`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        height: 10vh;
        color: white;
        width: 100vw;    
`
const Logo = styled(Link)`
        text-decoration: none;
        font-family: 'Whisper', cursive;
        display: flex;
        width: 25vw;
        padding: 0 2vw;
        float: left;
        color: #fff;
        font-size:4vh;
`
const SearchbarWrapper = styled(Box)`
        width:60vw;
        height: 100%;
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
        color:white;
        width: 100%;
        &>div{
                font-size: 1vw;
                overflow: hidden;
                white-space: wrap;
                text-overflow: ellipsis;
        }
        
`


export default function Header({ isAuthenticated, isUserAuthenticated }) {

        const { account } = useContext(DataContext);
        //drop down menu of user icon
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
                setAnchorEl(null);
        };
        const logout = () => {
                isUserAuthenticated(false);
                account(UserData);

                sessionStorage.removeItem('refreshToken');
                sessionStorage.removeItem('accessToken');
                handleClose();
        }



        return (
                <>
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

                                                                <MenuItem onClick={logout}>Logout</MenuItem>
                                                        </Menu>
                                                </div>
                                                :
                                                <Link to={'/login'} style={{ textDecoration: 'none', width: '10vw', fontSize: '3vh', color: 'white' }}>Login / Sign Up</Link>
                                }
                        </Container>
                </>
        )
}
