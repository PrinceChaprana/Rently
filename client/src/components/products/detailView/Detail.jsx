import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ProductData } from '../../../constant/variable';
import { API } from '../../../service/api';

import { Box, styled ,Typography,Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DataContext } from '../../../context/DataProvider';

const Container = styled(Box)`
        padding: 2vh 10vw 0 10vw;
        width: 100vw;
        overflow: scroll;
        height: 80vh;
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
                //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        text-transform: capitalize;

`
const UserInfo = styled(Box)`
        display: flex;
        height: 12%;
        align-items: center;
        background: #eeeeee;
        border-radius: 1rem;
        padding:0 1vw ;
        &>div{
                width: 60%;
                font-size:2vh;
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
        font-size: 5vh;
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
        display: flex;
`
const ButtonWrapper = styled(Box)`
        display:flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        color:white;
        font-weight: bold;
        font-size: 1.1rem;
        &>div{
                border-radius: 5rem;
                padding: 1vh;
                margin: 1vh 0;
                height:5vh;
        }
        /* @media screen and (max-width:426px){
                position: fixed;
                display: flex;
                flex-direction: row;
                width: 100%;
                left: 0;
                top:93vh;
                height: 8vh;
                border-radius: 1rem 1rem 0 0;
                overflow: hidden;
                vertical-align: middle;
                &>div{
                        padding: 2vh 0;
                        width: 50%;
                }
        } */
`
const OfferButton = styled(Box)`
        background: #ff8080;
`
const WishlistButton = styled(Box)`
        background: #ff80c0;
`

const Description = styled(Box)`
        border-radius: .5rem;
        overflow: hidden;

        &>h2{
                border-bottom: 1px solid black;
                background: #f4f4f4;
        }
`


export default function Detail() {
        const { id } = useParams();
        const navigate = useNavigate();
        const {account} = useContext(DataContext);
        const [product, setProduct] = useState([]);

        const WishlistProduct = async(id)=>{
                let response = await API.wishlist({email:account.email,id:id});
                if(response.isSuccess)
                  alert('added to wishlist')
                else
                  alert('failed to add');
        }

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
                                        <ButtonWrapper>
                                                <WishlistButton onClick={()=>WishlistProduct()} >Add to Wishlist</WishlistButton>
                                                <OfferButton >Make Offer</OfferButton>
                                        </ButtonWrapper>
                                        <AddressInfo>
                                                <LocationOnIcon/>
                                                <div>{product.city}, {product.state}, {product.country}</div>
                                        </AddressInfo>
                                        <Description>
                                                <h2>Description</h2>
                                                <p>{product.discription}</p>
                                        </Description>
                                </Information>
                        </div>
                        {/*this is where review and other data comes*/}

                </Container>
        )
}
