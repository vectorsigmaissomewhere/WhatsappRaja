import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import ReviewTop from '../Reviews/ReviewTop';
import ReviewFilter from '../Reviews/ReviewFilter';
import ReviewList from '../Reviews/ReviewList';
import Footer from '../Home/Footer';

const Review = () => {
  return (
    <div>
      <NavbarPanel />
      <ReviewTop />
      <ReviewFilter />
      <ReviewList />
      <Footer />
    </div>
  )
}

export default Review
