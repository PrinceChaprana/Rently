import {useContext, useEffect,useState} from 'react'
import { Link, useNavigate,useLocation, useParams } from 'react-router-dom'
import { API } from '../../service/api';
import Products from '../products/Products'
import {styled,Box} from '@mui/material'
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
  background: #dddddd;
  margin:1vh 10vw;
`

export default function SearchPage() {
  const {account} = useContext(DataContext);
  let {keyword} = useParams();
  const location = useLocation();
  let [products,setProducts] = useState({});

  useEffect(()=>{
    const fetchProduct = async()=>{
      let response = await API.searchProduct({keyword:keyword,longitude:account.longitude,latitude:account.latitude});
      console.log(response)
      if(response.isSuccess) setProducts(response.data);
      //else
        //show errors
    }
    //const keyword = location.search?.split('=')[1];
    fetchProduct();

  },[keyword]);

  return (
    <Container>
      {
        products?.length ? <Products products={products} />
        :
        <div>
          No Products listed
        </div>
      }
    </Container>
  )
}
