import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import Stats from "./Stats"

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.user.value)
  const loggedIn = useSelector((state) => state.status.value)
  const allDrinks = useSelector((state) => state.drinklist.value)
  const [viewStats, setViewStats] = useState(false)

  return (
    <div className="profile-page-container">
      <div className="profile-info">
        <div className="profile-content">
          <h1>Info</h1>
          <div className="profile-details">
            <div>Name:</div>
            <div className="profile-detail-content">{currentUser.first_name} {currentUser.last_name}</div>
          </div>
          <br/>
          <div className="profile-details">
            <div>Username:</div>
            <div className="profile-detail-content">{currentUser.username}</div>
          </div>
          <br/>
          <div className="profile-details">
            <div>Email:</div>
            <div className="profile-detail-content">{currentUser.email}</div>
          </div>
          <br />
          <div className="profile-details">
            <div>Location:</div>
            <div className="profile-detail-content">{currentUser.location}</div>
          </div>
        </div>
        <div className="drink-list-container">
          <h2>{currentUser.username}'s  Drink List</h2>
          <div className="drink-list-content">
            <ul className="drink-list">
              {
                allDrinks.list.map((drink) => {
                  return (
                    <li key={drink.id} className="drink">
                      {drink.name}
                      <hr></hr>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <br/>
          <div>
            <button className="stats-button" onClick={() => setViewStats(true)}>View Stats</button>
          </div>
        </div>
      </div>
      
      {viewStats ? <Stats allDrinksList={allDrinks.list}/> :  null }
    </div>
  )
}

export default ProfilePage