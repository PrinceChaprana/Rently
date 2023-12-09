import React from 'react'
import {Box,styled} from '@mui/material'
import {Link} from 'react-router-dom'

const Logo = styled(Link)`
        font-family: 'Whisper', cursive;
        text-decoration: none;
        display: flex;
        float: left;
        color: #000;
        font-size:6vh;
        justify-content: center;
`

export default function LogoIcon() {
  return (
        <Logo to='/'>RentApp</Logo>                           
  )
}
