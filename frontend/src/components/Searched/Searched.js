import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import SearchedTag from '../Searched/SearchedTag';
import SearchedList from '../Searched/SearchedTag';
import Footer from '../Home/Footer';


const Searched = () => {
  return (
    <div>
      <NavbarPanel />
      <SearchedTag />
      <SearchedList />
      <Footer />
    </div>
  )
}

export default Searched
