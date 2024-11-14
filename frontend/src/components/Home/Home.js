import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import HeroPanel from '../Home/HeroPanel';
import Category from '../Home/Category';
import DashboardButton from '../Home/DashboardButton';
import ActiveParty from '../Home/ActiveParty'
import Footer from '../Home/Footer';

const Home = () => {
  return (
    <>
    <NavbarPanel />
    <HeroPanel />
    <Category />
    <DashboardButton />
    <ActiveParty />
    <Footer />
    </>
  )
}

export default Home
