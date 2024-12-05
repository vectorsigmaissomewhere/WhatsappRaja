import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import ReviewTop from '../Reviews/ReviewTop';
import ReviewFilter from '../Reviews/ReviewFilter';
import ReviewList from '../Reviews/ReviewList';
import AddReview from '../Reviews/AddReview';
import Footer from '../Home/Footer';

const Review = () => {
  return (
    <div>
      <NavbarPanel />
      <ReviewTop />
      <ReviewFilter />
      <AddReview />
      <ReviewList />
      <Footer />
    </div>
  )
}

export default Review
