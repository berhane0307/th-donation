/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import LoginForm from './components/LoginForm'
import DonationForm from './components/DonationForm'
import SuccessPage from './components/SuccessPage'
import TransactionHistory from './components/TransactionHistory'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" Component={LoginForm} />
      <Route path="/donate" Component={DonationForm} />
      <Route path="/success" Component={SuccessPage} />
      <Route path="/transactions" Component={TransactionHistory} />
    </Route>,
  ),
)

export default router
