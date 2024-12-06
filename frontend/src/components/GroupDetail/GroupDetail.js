import React from 'react'
import GroupTopView from '../GroupDetail/GroupTopView'
import GroupReview from '../GroupDetail/GroupReview'
import AddReview from '../GroupDetail/AddReview'
import GroupReviewList from '../GroupDetail/GroupReviewList'
import NavbarPanel from '../Home/NavbarPanel'
import Footer from '../Home/Footer'

const GroupDetail = () => {
  return (
    <div>
      <NavbarPanel />
      <GroupTopView />
      <GroupReview />
      <AddReview />
      <GroupReviewList />
      <Footer />
    </div>
  )
}

export default GroupDetail
