import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, styled, Box, Button, FormControl } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';
import { ProductData } from '../../../constant/variable';

const Container = styled(Box)`
        width: 50vw;
        max-height: 85vh;
        height: fit-content;
        overflow-y: scroll;
        background:#fff;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:1%;
        &>div,&>button{
                margin: 1vh 1vw;
                width: 80%;
        }
        &>div>label{
                width: 100%;
                justify-content:center;
        }
        &>div>label>svg{
                align-items: center;
                font-size: 12rem;
        }
`
const Image = styled('img')({
        width: '80%',
        height: '40%',
        objectFit: 'contain'

});

const StyledButton = styled(Button)`
        width: 50%;
        height:5vh;
        background: #00a7e6;
        color: white
`;


export default function Create() {
        let productInit = ProductData;
        const [file, setFile] = useState('');
        const [product, setProduct] = useState(productInit);

        const { account } = useContext(DataContext);
        const navigate = useNavigate();

        let url = product.picture ? product.picture : '';

        useEffect(() => {
                const getImage = async () => {
                        if (file) {
                                const data = new FormData();
                                data.append("name", file.name);
                                data.append("file", file);

                                const response = await API.uploadFile(data);
                                product.picture = response.data;
                        }
                }
                getImage();
                product.username = account.email;
                product.addressline = account.addressline;
                product.city = account.city;
                product.state = account.state;
                product.pincode = account.pincode;
                product.country = account.country;
        }, [file])

        const handleChange = (e) => {
                setProduct({ ...product, [e.target.name]: e.target.value});
                
        }
        const uploadProduct = async() =>{
                let response = await API.createProduct(product);
                navigate('/sell');
        }

        return (
                <div style={{ height: '100vh', background: '#d4d4d4', padding: '5vh 25vw' }}>
                        <Container>
                                {
                                        url === '' ?
                                                <div  >
                                                        <label htmlFor='fileinput'>
                                                                <InsertPhotoIcon />
                                                        </label>
                                                        <input type='file'
                                                                id='fileinput'
                                                                style={{ display: "none" }}
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                </div>
                                        : <Image src={url}/>

                                }

                                <TextField label='Name' name='name' onChange={(e) => handleChange(e)}></TextField>
                                <TextField label='Discription' name='discription' onChange={(e) => handleChange(e)}></TextField>
                                <TextField label='Price' name='price' onChange={(e) => handleChange(e)}></TextField>
                                <TextField label='category' name='category' onChange={(e) => handleChange(e)}></TextField>
                                <StyledButton onClick={()=>uploadProduct()}>Post</StyledButton>

                        </Container>
                </div>
        )
}
