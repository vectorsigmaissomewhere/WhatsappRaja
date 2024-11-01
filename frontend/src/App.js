import React from 'react'
import NavbarPanel from './components/NavbarPanel'
import HeroPanel from './components/HeroPanel'
import DashboardButton from './components/DashboardButton'
import Category from './components/Category'
import ActiveParty from './components/ActiveParty'

const App = () => {
  return (
    <>
      <NavbarPanel />
      <HeroPanel />
      <DashboardButton />
      <Category />
      <ActiveParty />
    </>
  )
}

export default App
