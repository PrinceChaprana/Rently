import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
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
  const [searchParams, setSearchParams] = useState({});


  useEffect(() => {

    //get the params of the search

    console.log(keyword);

    setSearchParams({
      //globally save the search params
      ...searchParams,
      keywords: keyword,
      longitude: account.longitude ? account.longitude : LocationDefault.longitude,
      latitude: account.latitude ? account.latitude : LocationDefault.latitude
    });
  }, []);

  useEffect(() => {

    let longitude = account.longitude ? account.longitude : LocationDefault.longitude;
    let latitude = account.latitude ? account.latitude : LocationDefault.latitude;

    let params = keyword.split('=');
    setSearchParams({...searchParams, ["keywords"]:'', ['longitude']:longitude, ['latitude']:latitude});

    const searchProduct = async()=>{
      let response;
      switch (params[0]) {
        case "keyword":{
            setSearchParams({...searchParams,["keywords"]:params[1]});
            response = await API.defaultSearch({keyword: params[1],longitude,latitude});
          break;
        }
        case "category":{
          setSearchParams({...searchParams,["category"]:params[1]});
            response = await API.defaultSearch({category:params[1],longitude,latitude});
          break;
        }
        case "city":{
          setSearchParams({...searchParams,["city"]:params[1]});
            response = await API.defaultSearch({city:params[1]});
          break;
        }
        case "state":{
          setSearchParams({...searchParams,["state"]:params[1]});
          response = await API.defaultSearch({state:params[1]});
        }
        case "country":{
          setSearchParams({...searchParams,["country"]:params[1]});
          response = await API.defaultSearch({country:params[1]});
          break;
        }
        case "pincode":{
          setSearchParams({...searchParams,["pincode"]:params[1]});
          response = await API.defaultSearch({pincode:params[1]});
          break;
        }    
        default:
          break;
      }
      if(response.isSuccess){
        setProducts(response.data);
      }
    }
    searchProduct();
    console.log(products);

  },[keyword]);

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
    //fetchProduct();

  }, []);

  const fetchProducts = async () => {
    let response = await API.filterSearch(searchParams);
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
      {console.log(products)}
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
