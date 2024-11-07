import React from 'react'
import NavbarPanel from './components/Home/NavbarPanel'
import HeroPanel from './components/Home/HeroPanel'
import DashboardButton from './components/Home/DashboardButton'
import Category from './components/Home/Category'
import ActiveParty from './components/Home/ActiveParty'
import Footer from './components/Home/Footer'

// testing for search bar 
import SearchBar from './components/Search/SearchBar'
import CategorySearch from './components/Search/CategorySearch'

// testing for after search
import SearchedTag from './components/Searched/SearchedTag'


const App = () => {
  return (
    <>
      <NavbarPanel />
      <SearchedTag />
      <CategorySearch />
      <ActiveParty />
      <Footer />
    </>
  )
}

export default App
