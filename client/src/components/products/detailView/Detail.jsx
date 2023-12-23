import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ProductData } from '../../../constant/variable';
import { API } from '../../../service/api';

import { Box, styled ,Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled(Box)`
        margin: 2vh 10vw;
        width: 80vw;
        &>div{
                display: flex;
        }
        @media screen and (max-width:426px){
               &>div{
                display: flex;
                flex-direction: column;
               }
        }
`
const ImageWrapper = styled(Box)`
        width:50%;
        height: 50%;

        &>img{
                width: 100%;
                height: 50vh;
                object-fit: contain;
        }
        @media screen and (max-width:426px){
               width: 100%;
               margin: 0;
        }

`
const Information = styled(Box)`
        width:36vw;
        margin:0 2vh;
        &>div{
                margin-bottom: 2vh;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                padding: 0 1px;
        }
        @media screen and (max-width:426px){
               width: 100%;
               margin: 0;
               &>div{
                       font-size: 2vh;
               }
        }

`
const BasicInfo = styled(Box)`
        width: 100%;

`
const UserInfo = styled(Box)`
        display: flex;
        height: 10vh;
        align-items: center;
        &>div{
                width: 60%;
                font-size:2vw;
                text-transform: uppercase;
                font-weight:bold;
        }
        &>svg{
                width: 10vw;
                height: 10vh;
                font-size: 5vw;
        }
`

const Title = styled(Box)`
        font-size: 2vw;
        font-weight: bold;
        color:#310955;
        @media screen and (max-width:426px){
                font-size: 3vh;
        }
`
const Price = styled(Box)`
        font-size: 2vw;
        font-weight: bold;
        color:#6c0003;
        @media screen and (max-width:426px){
                font-size: 3vh;
        }
`

const AddressInfo = styled(Box)`
        text-transform: capitalize;
`


export default function Detail() {
        const { id } = useParams();
        const navigate = useNavigate();
        const [product, setProduct] = useState([]);

        useEffect(() => {
                const getProduct = async () => {
                        let response = await API.getAllProducts({ id: id });
                        if (response.isSuccess)
                                setProduct(response.data);
                }
                getProduct();
        }, []);

        return (
                <Container>
                        <div>
                                <ImageWrapper><img src={product.picture} alt={product.picture} /></ImageWrapper>
                                <Information>
                                        <BasicInfo>
                                                <Title>{product.name}</Title>
                                                <Price>₹{product.price}</Price>
                                        </BasicInfo>
                                        <UserInfo onClick={()=>navigate(`/profile/${product.username}`)}>
                                                <AccountCircleIcon/>
                                                <div >{product.username}</div>
                                        </UserInfo>
                                        <AddressInfo>
                                                <div>{product.city}, {product.state}, {product.country}</div>
                                        </AddressInfo>
                                        <div>
                                                {product.discription}
                                        </div>
                                </Information>
                        </div>
                        {/*this is where review and other data comes*/}

                </Container>
        )
}