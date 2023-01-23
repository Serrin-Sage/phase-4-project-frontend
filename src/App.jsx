import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Header from './components/Header'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProfilePage from './components/profile/ProfilePage'
import CategoryPage from './components/category/CategoryPage'

function App() {
  const selectedCategory = useSelector((state) => state.category.value)
  console.log(selectedCategory)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path={`/category/${selectedCategory.category}`} element={<CategoryPage />}/>
      </Routes>
    </div>
  )
}

export default App
