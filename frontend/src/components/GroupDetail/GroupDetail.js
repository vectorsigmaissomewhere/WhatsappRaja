import React from 'react'
import GroupTopView from '../GroupDetail/GroupTopView'
import GroupReview from '../GroupDetail/GroupReview'
import GroupReviewList from '../GroupDetail/GroupReviewList'

const GroupDetail = () => {
  return (
    <div>
      <GroupTopView />
      <GroupReview />
      <GroupReviewList />
    </div>
  )
}

export default GroupDetail
