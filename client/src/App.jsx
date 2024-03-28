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
import Book from './pages/Book'
import JournalBook from './components/books/JournalBookForm'
import LedgerBookForm from './components/books/LedgerBookForm'
import { SessionProvider } from './context/SessionContext'
import PrivateRoute from './components/middlewares/PrivateRoute'
import PublicRoute from './components/middlewares/PublicRoute'

function App() {
  return (
    <>
    <SessionProvider>
      <Router>
        <Routes>
          <Route path='/' element={<PublicRoute component={ <Login /> } />}/>

          <Route path='/register' element={<PublicRoute component={ <Register /> } />}/>
          
          <Route path='/dashboard' element={<PrivateRoute component={ <Dashboard /> } />}/>

          <Route path='/account/' element={<PrivateRoute component={<Account />} />}>
            <Route path='add' element={<AddAccountForm  />}/>
            <Route path='search' element={<SearchAccountForm  />}/>
          </Route>

          <Route path='/movement/' element={<PrivateRoute component={ <Movement /> } />}>
            <Route path='add' element={<AddMovementForm />} />
            <Route path='search' element={<SearchMovementForm />}/>
          </Route>
          
          <Route path='/book/' element={<PrivateRoute component={ <Book /> } />}>
            <Route path='journal' element={<JournalBook />}/>
            <Route path='ledger' element={<LedgerBookForm />}/>
          </Route>

        </Routes>
      </Router>
    </SessionProvider>
    </>
  )
}

export default App
