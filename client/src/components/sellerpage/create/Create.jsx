import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, styled, Box, Button, FormControl , Select , MenuItem } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';
import { ProductData , CategoryData } from '../../../constant/variable';

import CircularProgress from '@mui/material/CircularProgress';

const Container = styled(Box)`
        width: 100vw;
        padding: 1vh 25vw;
        overflow-y: scroll;
        background:#fff;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>div,&>button{
                margin: 1vh 1vw;
                width: 80%;
        }
        &>label{
                width: 80%;
                justify-content: center;
                align-items: center;
        }
        
`
const Image = styled('img')({
        width: '100%',
        height: '100%',
        objectFit: 'contain'

});

const StyledButton = styled(Button)`
        width: 50%;
        height:5vh;
        background: #00a7e6;
        color: white;
`;

const ImageWrapper = styled(Box)`
        background: #eaeaea;
        height: 40vh;
        &>svg{
                width: 100%;
                height: 100%;
                font-size: 100%;
        }
`

export default function Create() {
        let productInit = ProductData;
        let [file, setFile] = useState('');
        let [loading, setloading] = useState(false);
        let [product, setProduct] = useState(productInit);
        const [url, setUrl] = useState('');

        const { account } = useContext(DataContext);
        const navigate = useNavigate();

        useEffect(() => {
                const getImage = async () => {
                        if (file) {
                                const data = new FormData();
                                data.append("name", file.name);
                                data.append("file", file);

                                const response = await API.uploadFile(data);
                                product.picture = response.data;
                        } else {
                                product.picture = ''
                        }
                }
                getImage();
                setUrl(product.picture);
                product.username = account.email;
                product.addressline = account.addressline;
                product.city = account.city;
                product.state = account.state;
                product.pincode = account.pincode;
                product.country = account.country;
                product.longitude = account.longitude;
                product.latitude = account.latitude;
        }, [file])

        useEffect(() => {
                setUrl('');
        }, []);

        const handleChange = (e) => {
                setProduct({ ...product, [e.target.name]: e.target.value });

        }
        const uploadProduct = async () => {
                let response = await API.createProduct(product);
                navigate('/sell');
        }

        return (
                <div >
                        <Container>
                                <label htmlFor="fileinput">
                                        <ImageWrapper>
                                                {
                                                        url === '' ?
                                                                <InsertPhotoIcon />
                                                                :
                                                                <Image src={url} onLoadStart={setloading(true)} onLoad={() => setloading(false)} />



                                                }
                                        </ImageWrapper>
                                </label>
                                <input type='file'
                                        id='fileinput'
                                        style={{ display: "none" }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                />

                                <TextField label='Name' name='name' onChange={(e) => handleChange(e)}></TextField>
                                <TextField label='Discription' name='discription' onChange={(e) => handleChange(e)}></TextField>
                                <TextField label='Price' name='price' onChange={(e) => handleChange(e)}></TextField>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                                value={product.category}
                                                name='category'
                                                onChange={(e)=>handleChange(e)}
                                        >
                                                {
                                                        CategoryData.map(category => (
                                                                <MenuItem value={category}>{category}</MenuItem>
                                                        ))
                                                }
                                        </Select>

                                </FormControl>
                                <StyledButton onClick={() => uploadProduct()}>Post</StyledButton>

                        </Container>
                </div>
        )
}
