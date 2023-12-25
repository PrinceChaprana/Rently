import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider'
import { useParams } from 'react-router-dom';
import {API} from '../../service/api'
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';

import { Box, styled, InputBase, Modal } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { MessageData } from '../../constant/variable';


const Container = styled(Box)`
    background: linear-gradient(0deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 100%);
    `

const OfferModel = styled(Box)`
    //centering the model
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    //end code
    height: 50vh;
    width: 40vh;
    `
const Content = styled(Box)`
    width: 100%;
    border-radius: 1rem;
    height: 90%;
    padding:0 1rem;
    text-align: center;
    background: red;
    &>img{
      border: 1px solid black;
      border-radius: 1rem;
      overflow: hidden;
      object-fit: fill;
      width: 100%;
      height: 50%;
    }
    &>h3{
      width: 100%;
      height: 20%;
      overflow: hidden;
      word-break: break-all;
      background: red;
    }
    &>div{
      width: 100%;
      height: 15%;
      border-radius: 1rem;
      border: 1px solid black;
      padding: 1rem;
      font-size: 3vh;
      
    }
    `
const ButtonWrapper = styled(Box)`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    `

const Button = styled(Box)`
    width: 45%;
    float: right;
    background: blue;
    display: flex;
    margin: 1%;
    height: 100%;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    `

export default function ChatPage() {

  let { account , selectedProduct } = useContext(DataContext);
  let { username } = useParams();

  let [messages,setMessage] = useState([]);
  let [text,setText] = useState('');
  const [conversation,setConversation] = useState({});

  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const sendMessage = async() => {
    let message = {
      sender:account.email,
      receiver:username,
      conversationId:conversation._id,
      messageType:"normal",
      message:text
    };
    
    let response = await API.sendMessage(message);
    if(response.isSuccess){
      setText('');
    }
  }

  useEffect(()=>{
    //make conversation between the user
    const setupConversation = async()=>{
      let response = await API.createConversation({sender:account.email,receiver:username});
      setConversation(response.data);
      //console.log(conversation);
      setMessage(response.data);
    }
    setupConversation();
  },[]);

  useEffect(()=>{
    const getAllMessages = async()=>{
      console.log(conversation)
      let response = await API.getMessage({id:conversation._id});
      setMessage(response.data);
    }
    getAllMessages();
  },[conversation]);

  return (
    <Container>
      <ChatHeader />
      <ChatBody messages={messages} sender={account.email} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OfferModel
        >
          <Content>
            <h2>MAKE OFFER</h2>
            <img src={selectedProduct.picture} />
            <h3>{selectedProduct.name}</h3>
            <InputBase placeholder={selectedProduct.price} />
          </Content>
          <ButtonWrapper>
            <Button onClick={handleClose}><ClearRoundedIcon />Cancel</Button>
            <Button onClick={handleClose}><CheckRoundedIcon />Ok</Button>
          </ButtonWrapper>
        </OfferModel>
      </Modal>
      <ChatFooter handleOpen = {handleOpen} text={text} setText = {setText} sendMessage= {sendMessage}/>
    </Container>
  )
}
