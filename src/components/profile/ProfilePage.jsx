import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.user.value)
  const loggedIn = useSelector((state) => state.status.value)
  const allDrinks = useSelector((state) => state.drinklist.value)
  console.log(allDrinks.list)
  return (
    <div>
      ProfilePage
      {currentUser.first_name}
      <div className="">
        <ul>
          {
            allDrinks.list.map((drink) => {
              return (
                <li>
                  {drink.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ProfilePage