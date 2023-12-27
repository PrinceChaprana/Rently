import React from 'react'
import {Box, styled , Typography} from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const Container = styled(Box)`
  display: flex;
  flex-direction:column;
`
const Message = styled(Box)`
border-bottom: 1px solid black;
`
const Time = styled(Typography)`
  display: flex;
  font-size: small;
  width: 100%;
  justify-content: end;
  align-items: center;
  &>svg{
    font-size:medium;
    margin-right:1px;
  }
`

export default function SingleChat({text}) {

  
  const formatDate = (time) => {
    let hours = new Date(time).getHours();
    let min = new Date(time).getMinutes();

    return (hours + ":" + min).toString();
  }
  return (
    <Container>
      <Message>{text.message}</Message>
      <Time>
        <AccessTimeRoundedIcon/>
        <Typography>{formatDate(text.createdAt)}</Typography>
      </Time>
    </Container>
  )
}
