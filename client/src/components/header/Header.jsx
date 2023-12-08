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



const Container = styled(Box)`
        display: flex;
        align-items: center;
        background: #000;
        height: 10vh;
        color: white;
`
const Logo = styled(Link)`
text-decoration: none;
        font-family: 'Whisper', cursive;
        display: flex;
        margin: 0 10vw 0 10vw;
        float: left;
        color: #fff;
        font-size:6vh;
        background: #000;
`
const UserIcon = styled(AccountCircleIcon)`
        font-size: 3rem;
`
const UsernameWrapper = styled(Button)`
        display: flex;
        flex-direction: column;
        position: relative;
        float: right;
        margin-right: 3vw;
        color:white;
`


export default function Header({ isAuthenticated }) {

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



        return (
                <>
                        <Container>
                                <Logo to='/'>RentApp</Logo>
                                <SearchBar style={{ width: '100px' }} />
                                {
                                        isAuthenticated ?
                                                <div style={{ width: '100%' }}>
                                                        <UsernameWrapper
                                                                id="basic-button"
                                                                aria-controls={open ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                onClick={handleClick}
                                                        >
                                                                <UserIcon />
                                                                {account.name}
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
                                                                <MenuItem onClick={handleClose}><Link to='/profile' style={{textDecoration:'none'}}>Profile</Link></MenuItem>
                                                                <MenuItem onClick={handleClose}><Link to='/account' style={{textDecoration:'none'}}>My account</Link></MenuItem>
                                                                <MenuItem onClick={handleClose}><Link to='/sell' style={{textDecoration:'none'}}>Sell</Link></MenuItem>
                                                                
                                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                        </Menu>
                                                </div>
                                                :
                                                <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login/Sign Up</Link>
                                }
                        </Container>
                </>
        )
}
