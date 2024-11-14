import React from 'react'
import NavbarPanel from '../Home/NavbarPanel'
import AllGroup from '../Group/AllGroup'
import Footer from '../Home/Footer'
import GroupList from './GroupList'

const Group = () => {
  return (
    <>
    <NavbarPanel />
    <AllGroup />
    <GroupList />
    <Footer />
    </>
  )
}

export default Group
