import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import AddAccountContainer from './components/accounts/AddAccountContainer'
import SearchAccountContainer from './components/accounts/SearchAccountContainer'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/accounts' element={<Account><AddAccountContainer /></Account>}/>
        <Route path='/search' element={<Account><SearchAccountContainer /></Account>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
