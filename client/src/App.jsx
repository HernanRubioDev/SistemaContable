import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Movement from './pages/Movement'
import AddMovementForm from './components/movements/AddMovementForm'
import AddAccountForm from './components/accounts/AddAccountForm'
import SearchAccountForm from './components/accounts/SearchAccountForm'
import SearchMovementForm from './components/movements/SearchMovementForm'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/account/' element={<Account />}>
          <Route path='add' element={<AddAccountForm />}/>
          <Route path='search' element={<SearchAccountForm />}/>
        </Route>
        <Route path='/movement/' element={<Movement />}>
          <Route path='add' element={<AddMovementForm />}/>
          <Route path='search' element={<SearchMovementForm />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
