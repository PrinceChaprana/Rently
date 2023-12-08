import {useState} from 'react'
import { InputBase , Box ,styled,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


const Container = styled(Box)`
        background: black;
        border: 1px solid white;
        width: 50vw;
        display: flex;
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
                setSearchText(e.target.value);
        }
        const SearchProduct = () =>{
                navigate(`/search/+${searchText}`)
        }

  return (
    <div>
        <Container>
                <InputSearchField onChange={(e)=>handleChange(e)} placeholder='Search the Product...'/>
                <SearchButton onClick={()=>SearchProduct()}><SearchIcon/></SearchButton>
        </Container>
    </div>
  )
}
