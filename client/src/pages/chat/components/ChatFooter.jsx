import React from 'react'
import {Box,styled,InputBase,Button} from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Container = styled(Box)`
  height:8vh;
  background: transparent;
  display: flex;
  padding: 1vh;
`
const Offer = styled(Box)`
  background: white;
  width: 10vw;
  height: 10vw;
  margin: 1vw;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeaeca;
  &>svg{
    font-size: 8vw;
  }
`
const InputField = styled(Box)`
  display: flex;
  padding:0 1vh;
  border: 1px solid black;
  border-radius: 1rem;
  width: 72vw;
  height: 6vh;
  &>div{
    width: 100%;
  }
`
const SendButton = styled(Box)`
  width: 10vw !important;
  height: 10vw !important;
  margin: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #eeaeca;
  border-radius: 5rem 5rem;
  &>svg{
    font-size: 8vw;
  }
`

export default function ChatFooter({handleOpen,text,setText,sendMessage}) {
  
  const handleChange = (e) =>{
    setText(e.target.value);
  }

  return (
    <Container>
      <Offer onClick={handleOpen}><HandshakeIcon/></Offer>
      <InputField><InputBase value={text} onChange={(e)=>handleChange(e)} placeholder='Type Something ...'/></InputField>
      <SendButton onClick={sendMessage}><SendIcon/></SendButton>
    </Container>
  )
}
