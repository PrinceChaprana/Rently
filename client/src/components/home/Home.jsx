import React from 'react'
import Header from '../header/Header'
import SearchBar from '../searchbar/SearchBar'
import Banner from '../banner/Banner'
import CategoryGrid from '../category/CategoryGrid'

export default function Home({isAuthenticated}) {
  return (
        <>
                <Header isAuthenticated={isAuthenticated} />
                <div>Categories</div>
                <Banner style={{width:'50vh'}} />
                <CategoryGrid/>
        </>
  )
}
