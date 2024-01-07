import React, { useState } from 'react';

//MUI Components
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { styled, Menu, Button, TextField, InputBase } from '@mui/material';
import { Modal, List, Divider, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { CategoryData, SearchParams } from '../../constant/variable';

//react css
const Container = styled(Box)`
    display: flex;
    padding:2vh 0;
    &>div{
        margin:0 1vw;
        min-width: 120px;
        width: fit-content;
    }
`

const StyledSlider = styled(Slider)`
    width:80%;
    margin-left:10%;

`
const Wrapper = styled(Box)`
width:300px;
height:100vh;
background: #dddddd;
&>div{
    padding: 0 1vh;

}
`
const Card = styled(Box)`
background: white;
padding: 1%;
margin:1vh 0;
border-radius: 1rem;
&>h3{
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom:1vh;
}
&>p{
    display: flex;
    padding:0 1vh;
    justify-content: space-between;
}
`
const Or = styled(Box)`
text-align: center;
font-style: italic;
`


export default function FilterTab({ pressFilter, searchParams, setSearchParams }) {
    const [price, setPrice] = React.useState([0, 5000]);
    const [drawer, openDrawer] = useState(false);

    const [category, setCategory] = useState({});
    const [location, setLocation] = useState({});
    const [type, setType] = useState({});

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        openDrawer(open);
    };

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const handleClose = (event) => {
        setSearchParams({ ...searchParams, [event.target.name]: event.target.value });
    }

    const FilterButton = () => {
        setSearchParams({ ...searchParams, ["price"]: price,...location,...type,...category });
        console.log(searchParams);  
        openDrawer(false);
        pressFilter(true);
    }


    return (
        <Container>
            <Button onClick={toggleDrawer(true)}>filter</Button>
            
            <Modal
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                <Wrapper>
                    <div style={{ height: "95vh", overflowY: "scroll" }}>
                        <Card>
                            <h3>Price</h3>
                            <p><strong>Min:</strong>₹{price[0]}</p>
                            <p><strong>Max:</strong>₹{price[1]}</p>
                            <StyledSlider
                                getAriaLabel={() => 'Temperature range'}
                                value={price}
                                min={0}
                                max={50000}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                            />
                        </Card>
                        <Card>
                            <h3>Category</h3>
                            <FormControl sx={{ m: 1, width: "80%", padding: "0 0 0 10%", minWidth: 120 }}>
                                <Select
                                    value={searchParams.category ? searchParams.category : 'other'}
                                    name='category'
                                    onChange={(e)=>{setCategory({[e.target.name]:e.target.value})}}
                                >
                                    {
                                        CategoryData.map(category => (
                                            <MenuItem value={category}>{category}</MenuItem>
                                        ))
                                    }
                                </Select>

                            </FormControl>
                        </Card>
                        <Card>
                            <h3>Distance</h3>
                            <p><strong>Distance:</strong> {searchParams.distance}KM</p>
                            <StyledSlider
                                getAriaLabel={() => 'Temperature range'}
                                value={searchParams.distance}
                                min={1}
                                max={50}
                                name='distance'
                                onChange={(e)=>setLocation({[e.target.name]:e.target.value})}
                                valueLabelDisplay="auto"
                            />

                            <Or>OR</Or>

                            <h3>City</h3>
                            <TextField sx={{ width: "90%", marginLeft: "5%" }} name='city' onChange={(e)=>setLocation({[e.target.name]:e.target.value})} placeholder='meerut'></TextField>
                            <Or>OR</Or>
                            <h3>Pin Code</h3>
                            <TextField sx={{ width: "90%", marginLeft: "5%" }} name='pincode' onChange={(e)=>setLocation({[e.target.name]:e.target.value})} placeholder='250001'></TextField>
                            <Or>OR</Or>
                            <h3>State</h3>
                            <TextField sx={{ width: "90%", marginLeft: "5%" }} name='state' onChange={(e)=>setLocation({[e.target.name]:e.target.value})} placeholder='Uttar Pradesh'></TextField>
                        </Card>
                        <Card>
                            <h3>type</h3>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="product"
                                name="type"
                                onChange={(e) => setType({[e.target.name]:e.target.value})}
                            >
                                <FormControlLabel value="product" control={<Radio />} label="Product" />
                                <FormControlLabel value="account" control={<Radio />} label="Account" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Card>
                    </div>
                    <div style={{ height: "5vh" }}>
                        <Button variant="outlined" onClick={() => FilterButton()}>Filter</Button>
                    </div>
                </Wrapper>
            </Modal>
            {console.log(location)}
            {//filterPage(price,handleClose, handleChange,searchParams,setSearchParams)
            }


        </Container>
    )
}
