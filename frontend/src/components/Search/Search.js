import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import Search from '../Search/SearchBar'
import CategorySearch from './Search/CategorySearch';
import HeroPanel from '../Home/HeroPanel';

const Search = () => {
  return (
    <div>
      <NavbarPanel />
      <SearchBar />
      <CategorySearch />
      <HeroPanel />
    </div>
  )
}

export default Search
