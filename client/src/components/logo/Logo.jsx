import React from 'react'
import {Box,styled} from '@mui/material'

const Logo = styled(Box)`
        font-family: 'Whisper', cursive;
        display: flex;
        float: left;
        color: #000;
        font-size:6vh;
        justify-content: center;
`

export default function LogoIcon() {
  return (
        <Logo>RentApp</Logo>                           
  )
}
