import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import userSlice from './features/user'
import categorySlice from './features/category'
import './index.css'
import './stylesheets/header.css'
import './stylesheets/mainpage.css'

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
