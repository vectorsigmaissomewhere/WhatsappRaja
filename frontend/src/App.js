import React from 'react'
import NavbarPanel from './components/NavbarPanel'
import HeroPanel from './components/HeroPanel'
import DashboardButton from './components/DashboardButton'
import Category from './components/Category'

const App = () => {
  return (
    <>
      <NavbarPanel />
      <HeroPanel />
      <DashboardButton />
      <Category />
    </>
  )
}

export default App
