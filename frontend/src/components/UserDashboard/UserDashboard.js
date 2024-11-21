import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import DashboardTag from '../UserDashboard/DashboardTag';
import AddGroup from '../UserDashboard/AddGroup'
import Footer from '../Home/Footer';
import Test from '../UserDashboard/Test';

const UserDashboard = () => {
  return (
    <div>
      <NavbarPanel />
      <DashboardTag />
      <AddGroup />
      <Test />
      <Footer />
    </div>
  )
}

export default UserDashboard
