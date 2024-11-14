import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import DashboardTag from '../UserDashboard/DashboardTag';
import AddGroup from '../UserDashboard/AddGroup'
import Footer from '../Home/Footer';

const UserDashboard = () => {
  return (
    <div>
      <NavbarPanel />
      <DashboardTag />
      <AddGroup />
      <Footer />
    </div>
  )
}

export default UserDashboard
