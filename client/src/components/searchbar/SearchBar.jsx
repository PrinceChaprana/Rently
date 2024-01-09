import { useState } from 'react'
import { InputBase, Box, styled, Button, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'

const Container = styled(Box)`
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        align-items: center;
        background: white;
        border-radius: .7rem;
        color:black;
        overflow: hidden;
        min-height: 50px;
        `
const SearchButton = styled(Box)`
        background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
        color: white;
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1%;
        border-radius: 0.7rem;
        min-height: 50px;
        min-width: 50px !important;
        &>svg{
                font-size: 30px;
        }

`
const InputSearchField = styled(InputBase)`
        width: 85%;
        padding:0 1%;
`


export default function SearchBar() {

        const [searchText, setSearchText] = useState('');
        const navigate = useNavigate();
        const handleChange = (e) => {
                //console.log(e);
                if (e.target.value === ' ')
                        setSearchText(e.target.value);
                else
                        setSearchText(e.target.value);
        }
        const handleKeyPress = (e) => {
                if (e.key === 'Enter') {
                        SearchProduct();
                }
        }
        const SearchProduct = () => {
                const query = searchText.split(/[ ]+/).join('+')
                // console.log(query)
                navigate(`/search/keyword=${query}`)
        }

        return (
                <div height="100%">
                        <Container>
                                <InputSearchField onKeyDown={(e) => handleKeyPress(e)} onSearch={() => SearchProduct()} onChange={(e) => handleChange(e)} placeholder='Search the Product...' />
                                <SearchButton>
                                        <SearchIcon onClick={() => SearchProduct()} />
                                </SearchButton>
                        </Container>
                </div>
        )
}
