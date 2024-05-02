import React from 'react'
import Menu from './Menu'
import LoginForm from './LoginForm'
import DonationForm from './DonationForm'
import { Router } from 'express'
import { Outlet } from 'react-router-dom'
import SuccessPage from './SuccessPage'
import TransactionHistory from './TransactionHistory'

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default App
