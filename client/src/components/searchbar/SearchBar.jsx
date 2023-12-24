import {useState} from 'react'
import { InputBase , Box ,styled,Button,FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


const Container = styled(Box)`
        display: flex;
        background: black;
        border: 1px solid white;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        height: 70%;
        margin: 1% 0;
        padding:1vh 3vw;
        border-radius: 5rem;
        background: transparent;        
`
const SearchButton = styled(Box)`
        color: #fff;
        width:10%;
        display: flex;
        justify-content: center;
        align-items: center; 
        padding:1vh 1vw ;

`
const InputSearchField = styled(InputBase)`
        width: 90%;
        height: 100%;
        padding: 1% 1%;
        color:white;
        &>input{
                
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
                <SearchButton>
                        <div  onClick={()=>SearchProduct()}><SearchIcon/></div>
                </SearchButton>
        </Container>
    </div>
  )
}
