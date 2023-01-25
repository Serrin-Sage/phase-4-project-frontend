import { useSelector } from "react-redux"

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.user.value)
  return (
    <div>
      ProfilePage
      {currentUser.first_name}
    </div>
  )
}

export default ProfilePage