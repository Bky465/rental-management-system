import React from 'react'
import PersonalInfo from '../../../components/profile/PersonalInfo'
 const personalInfo = () => {
  return (
    <div>
        <PersonalInfo />
    </div>
  )
}
export default personalInfo
personalInfo.profile = (page: React.ReactElement) => {
    return { page };
  };
  