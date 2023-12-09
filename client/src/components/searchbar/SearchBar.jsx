import {useState} from 'react'
import { InputBase , Box ,styled,Button,FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


const Container = styled(Box)`
        background: black;
        border: 1px solid white;
        width: 50vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin:0 1vw;
`
const SearchButton = styled(Button)`
        color: #fff;
        float: right;
        position: relative;
        &>svg{
                height: 32px;
        }

`
const InputSearchField = styled(InputBase)`
        width: 100%;
        padding:1% 5%;
        color:white;
        &>input{
                border-bottom: 1px solid white;
        }
`


export default function SearchBar() {

        const [searchText,setSearchText] = useState('');
        const navigate = useNavigate();
        const handleChange = (e) => {
                if(e.target.value === ' ')
                        setSearchText(e.target.value);
                else
                        setSearchText(e.target.value);
        }
        const SearchProduct = () =>{
                const query = searchText.split(/[ ]+/).join('+')
                // console.log(query)
                navigate(`/search/${query}`)
        }

  return (
    <div>
        <Container>
                <InputSearchField type='search' onSearch={()=>SearchProduct()} onChange={(e)=>handleChange(e)} placeholder='Search the Product...'/>
                <SearchButton onClick={()=>SearchProduct()}><SearchIcon/></SearchButton>
        </Container>
    </div>
  )
}
