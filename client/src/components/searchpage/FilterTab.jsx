import React, { useState } from 'react';

//MUI Components
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { styled, Menu, Button, TextField } from '@mui/material';
import { Drawer, List, Divider, Radio, RadioGroup, FormControlLabel } from '@mui/material';
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

const filterPage = (price, handleClose, handleChange, searchParams,setSearchParams,FilterButton) => {
    return (
        <Box style={{ width: "70vw", height: "100vh", padding: "1vh 2vw" }}>
            <div style={{ height: "95vh", overflowY: "scroll" }}>
                <div>
                    <h3>Price</h3>
                    <div>Min:₹{price[0]}</div>
                    <div>Max:₹{price[1]}</div>
                    <StyledSlider
                        getAriaLabel={() => 'Temperature range'}
                        value={price}
                        min={0}
                        max={50000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                    />
                </div>
                <Divider />
                <div>
                    <h3>Category</h3>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={searchParams.category}
                            name='category'
                            onChange={handleClose}
                        >
                            {
                                CategoryData.map(category =>(
                                    <MenuItem value={category}>{category}</MenuItem>
                                ))
                            }
                        </Select>

                    </FormControl>
                </div>
                <Divider />
                <div>
                    <h3>Distance</h3>
                    <div>Distance:{searchParams.distance}KM</div>
                    <StyledSlider
                        getAriaLabel={() => 'Temperature range'}
                        value={searchParams.distance}
                        min={0}
                        max={130}
                        name='distance'
                        onChange={handleClose}
                        valueLabelDisplay="auto"
                    />
                </div>
                <Divider />
                <div>
                    <h3>City</h3>
                    <TextField name='city' onChange={(e)=>setSearchParams({...searchParams,[e.target.name]:e.target.value})} placeholder='meerut'></TextField>
                </div>
                <Divider />
                <div>
                    <h3>Pin Code</h3>
                    <TextField name='pincode' onChange={(e)=>setSearchParams({...searchParams,[e.target.name]:e.target.value})}  placeholder='250001'></TextField>
                </div>
                <Divider />
                <div>
                    <h3>State</h3>
                    <TextField name='state' onChange={(e)=>setSearchParams({...searchParams,[e.target.name]:e.target.value})}  placeholder='Uttar Pradesh'></TextField>
                </div>
                <Divider/>
                <div>
                    <h3>type</h3>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="product"
                        name="type"
                        onChange={(e)=>setSearchParams({...searchParams,[e.target.name]:e.target.value})} 
                    >
                        <FormControlLabel value="product" control={<Radio />} label="Product" />
                        <FormControlLabel value="account" control={<Radio />} label="Account" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>
            </div>
            <div style={{ height: "5vh" }}>
                <Button variant="outlined" onClick={()=>FilterButton()}>Filter</Button>
            </div>
        </Box>
    )
}


export default function FilterTab({pressFilter,searchParams,setSearchParams}) {
    const [price, setPrice] = React.useState([0, 5000]);
    const [drawer, openDrawer] = useState(false);

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

    const FilterButton = () =>{
        setSearchParams({...searchParams,["price"]:price});
        pressFilter(true);
    }


    return (
        <Container>
            <Button onClick={toggleDrawer(true)}>filter</Button>
            <Drawer
                anchor="left"
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                {filterPage(price, handleClose, handleChange, searchParams,setSearchParams,FilterButton)}
            </Drawer>
            {//filterPage(price,handleClose, handleChange,searchParams,setSearchParams)}
            }
        </Container>
    )
}
