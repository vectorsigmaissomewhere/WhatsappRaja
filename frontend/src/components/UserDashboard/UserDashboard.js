import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import DashboardTag from '../UserDashboard/DashboardTag';
import AddGroup from '../UserDashboard/AddGroup'
import Footer from '../Home/Footer';
import PersonalGroup from '../UserDashboard/PersonalGroup';

const UserDashboard = () => {
  return (
    <div>
      <NavbarPanel />
      <DashboardTag />
      <AddGroup />
      <PersonalGroup />
      <Footer />
    </div>
  )
}

export default UserDashboard
