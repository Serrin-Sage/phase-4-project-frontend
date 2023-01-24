import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Header from './components/Header'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProfilePage from './components/profile/ProfilePage'
import DrinkPage from './components/drinks/DrinkPage'

function App() {
  const selectedCategory = useSelector((state) => state.category.value)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path={`/drinks/${selectedCategory.category}`} element={<DrinkPage />}/>
      </Routes>
    </div>
  )
}

export default App
