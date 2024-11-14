import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import AddReviewTop from '../AppendReview/AddReviewTop';
import AddReview from '../AppendReview/AddReview';
import Footer from '../Home/Footer';

const AppendReview = () => {
  return (
    <div>
      <NavbarPanel />
      <AddReviewTop />
      <AddReview />
      <Footer />
    </div>
  )
}

export default AppendReview
