import React from 'react'
import { styled, Box ,Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled(Box)`
  display: flex;
  height:8vh;
  background: transparent;
  padding:1vh;
`
const Image = styled(Box)`
  width: 6vh;
  height: 6vh;
  border-radius: 5rem 5rem;
  overflow: hidden;
  &>svg{
    font-size: 6vh;
  }
`
const Name = styled(Typography)`
  width:fit-content;
  padding-left: 1vh;
  padding-top:1vh;
`

export default function ChatHeader() {
  return (
    <Container>
      <Image>
        <AccountCircleIcon/>
      </Image>
        <Name>Prince</Name>
    </Container>
  )
}
