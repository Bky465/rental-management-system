import React from 'react'
import MyListing from '../../../components/profile/MyListing'

const myListings = () => {
  return (
    <div>
      <MyListing />
    </div>
  )
}

export default myListings
myListings.profile = (page: React.ReactElement) => {
  return { page };
};
