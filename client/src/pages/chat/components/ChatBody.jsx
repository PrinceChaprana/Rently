import React, { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import SingleChat from './SingleChat'
import { API } from '../../../service/api'

const Container = styled(Box)`
  height : 74vh;
  padding: 1vh 1vh;
  display: flex;
  flex-direction: column;
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

export default function ChatBody({ messages, sender }) {
  return (
    <Container>
      {console.log(messages,sender)}
      {
        messages.map(text =>(
          <Chat>
            {
              text.sender === sender?
              <Sent>{text.message}</Sent>
              :
              <Recieve>{text.message}</Recieve>
            }
          </Chat>
        ))
      }
    </Container>
  )
}
