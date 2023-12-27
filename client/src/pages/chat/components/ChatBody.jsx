import React, { useEffect } from 'react'
import { Box, styled , Typography } from '@mui/material'
import SingleChat from './SingleChat'
import { API } from '../../../service/api'

const Container = styled(Box)`
  height : 74vh;
  padding: 1vh 1vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
const Sent = styled(Box)`
  float: right;
  border:1px solid black;
  border-radius: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  width: fit-content;
  float: right;
  word-break: break-all;
`
const Recieve = styled(Box)`
  float:left;
  border:1px solid black;
  border-radius: 1rem 1rem 1rem 0rem;
  padding: 0.5rem;
  width: fit-content;
  word-break: break-all;
`
const Chat = styled(Box)`
  width: 100%;
  height: fit-content;
  margin-bottom: 1vh;
`
const Time = styled(Typography)`

`

export default function ChatBody({ messages, sender }) {

  

  return (
    <Container>
      {console.log(messages,sender)}
      {
        messages.length > 0 ? messages.map(text =>(
          <Chat>
            {
              text.sender === sender?
              <Sent><SingleChat text={text}></SingleChat></Sent>
              :
              <Recieve>{text.message}</Recieve>
            }
          </Chat>
        ))
        : <div></div>
      }
    </Container>
  )
}
