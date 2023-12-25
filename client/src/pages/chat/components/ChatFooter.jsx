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
  width:15%;
  background: white;
  width: 6vh;
  height: 6vh;
  margin-right: 1vh;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeaeca;
  &>svg{
    font-size: 4vh;
  }
`
const InputField = styled(Box)`
  display: flex;
  padding:0 1vh;
  border: 1px solid black;
  border-radius: 1rem;
  width: 72%;
  height: 6vh;
  &>div{
    width: 100%;
  }
`
const SendButton = styled(Box)`
  width: 6vh;
  height: 6vh;
  margin-left: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #eeaeca;
  border-radius: 5rem 5rem;
  &>svg{
    font-size: 4vh;
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
