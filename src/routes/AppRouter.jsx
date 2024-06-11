import React, {useState, useContext} from 'react'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

import Layout from '../layouts/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Home from '../pages/Home'

import AuthContext from '../contexts/AuthContext'
import TodoApp from '../pages/TodoApp'



const loginRoute = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children : [
    { path : '', element: <Home/> },
    // { path : '/register', element: <Register /> },
    // { path : '/login', element: <Login /> },
    { path : '/profile', element: <Profile /> },
    { path : '/jobtodo', element: <TodoApp /> },
  ]
}])


const guestRoute = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children : [
    { path : '', element: <Home/> },
    { path : '/register', element: <Register /> },
    { path : '/login', element: <Login /> },
    // { path : '/profile', element: <Profile /> },
    // { path : '/jobtodo', element: <TodoApp /> },

  ]
}])

function AppRouter() {

    const {isLogin} = useContext(AuthContext)
  return (
    <>

      <RouterProvider router={isLogin ? loginRoute:  guestRoute} />
    </>
  )
}

export default AppRouter