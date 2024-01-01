import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { API } from '../../service/api';
import Products from '../products/Products'
import { styled, Box } from '@mui/material'
import { DataContext } from '../../context/DataProvider';
import FilterTab from './FilterTab';
import { LocationDefault, SearchParams } from '../../constant/variable';

const Container = styled(Box)`
  background: #dddddd;
  padding:0vh 10vw;
`

export default function SearchPage() {
  const { account } = useContext(DataContext);
  let { keyword } = useParams();
  const location = useLocation();
  let [products, setProducts] = useState({});
  let [filterButton, pressFilter] = useState(false);
  const [searchParams, setSearchParams] = useState([]);


  useEffect(() => {
    setSearchParams({
      //globally save the search params
      ...searchParams,
      keywords: keyword,
      longitude: account.longitude ? account.longitude : LocationDefault.longitude,
      latitude: account.latitude ? account.latitude : LocationDefault.latitude
    });
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(searchParams);
      let response = await API.searchProduct({ keywords: keyword, longitude:account.longitude?account.longitude:LocationDefault.longitude, latitude: account.latitude?account.latitude:LocationDefault.latitude });
      console.log(response)
      if (response.isSuccess) setProducts(response.data);
      //else
      //show errors
    }
    //setSearchParams({...searchParams,keywords:keyword,longitude:account.longitude?account.longitude:LocationDefault.longitude,latitude:account.latitude?account.latitude:LocationDefault.latitude});
    //const keyword = location.search?.split('=')[1];
    fetchProduct();

  }, [keyword]);

  const fetchProducts = async () => {
    let response = await API.searchProduct(searchParams);
    console.log(response);
  }

  useEffect(() => {
    if (filterButton) {
      fetchProducts();
      setSearchParams({ ...searchParams, keywords: keyword });
      console.log(searchParams);
      pressFilter(false)
    }
  }, [filterButton])

  //price frontend pe control karni padegi

  return (
    <Container>
      <FilterTab pressFilter={pressFilter} searchParams={searchParams} setSearchParams={setSearchParams} />
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
