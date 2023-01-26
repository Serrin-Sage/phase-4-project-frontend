import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import userSlice from './features/user'
import categorySlice from './features/category'
import clearSignUp from './features/clearsignup'
import statusSlice from './features/loginStatus'
import drinkListSlice from './features/drinklist'
import './index.css'
import './stylesheets/header.css'
import './stylesheets/mainpage.css'
import './stylesheets/drinkpage.css'
import './stylesheets/signinup.css'
import './stylesheets/profilepage.css'

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    clearsignup: clearSignUp,
    status: statusSlice,
    drinklist: drinkListSlice,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
