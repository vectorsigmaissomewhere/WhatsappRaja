import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import SearchBar from '../Search/SearchBar'
import CategorySearch from '../Search/CategorySearch';
import Footer from '../Home/Footer';

const Search = () => {
  return (
    <div>
      <NavbarPanel />
      <SearchBar />
      <CategorySearch />
      <Footer />
    </div>
  )
}

export default Search
