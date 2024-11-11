import React from 'react'
import NavbarPanel from './components/Home/NavbarPanel'
import Footer from './components/Home/Footer'

// testing for search bar 
import CategorySearch from './components/Search/CategorySearch'

// testing for after search
//import SearchedTag from './components/Searched/SearchedTag'


//public groups 
//import AllGroup from './components/Group/AllGroup'

// public filter 
import ReviewFilter from './components/Reviews/ReviewFilter'
//import ReviewList from './components/Reviews/ReviewList'

// dashboard
import DashboardTag from './components/UserDashboard/DashboardTag'
import AddGroup from './components/UserDashboard/AddGroup'


const App = () => {
  return (
    <>
      <NavbarPanel />
      <DashboardTag />
      <ReviewFilter />
      <CategorySearch />
      <AddGroup />
      <Footer />
    </>
  )
}

export default App
