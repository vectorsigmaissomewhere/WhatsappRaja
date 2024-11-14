import React from 'react'
import NavbarPanel from '../Home/NavbarPanel';
import ReviewTop from '../Reviews/ReviewTop';
import ReviewFilter from '../Reviews/ReviewFilter';
import ReviewList from '../Reviews/ReviewList';
import HeroPanel from '../Home/HeroPanel';

const Review = () => {
  return (
    <div>
      <NavbarPanel />
      <ReviewTop />
      <ReviewFilter />
      <ReviewList />
      <HeroPanel />
    </div>
  )
}

export default Review
