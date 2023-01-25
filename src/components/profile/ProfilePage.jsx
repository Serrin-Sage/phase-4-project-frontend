import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.user.value)
  const loggedIn = useSelector((state) => state.status.value)

  return (
    <div>
      ProfilePage
      {currentUser.first_name}
    </div>
  )
}

export default ProfilePage