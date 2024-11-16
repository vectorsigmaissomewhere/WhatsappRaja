import React from 'react'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Group from './components/Group/Group'
import Review from './components/Reviews/Review'
import Dashboard from './components/UserDashboard/UserDashboard'
import Searched from './components/Searched/Searched'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ResetPasswordMail from './components/Auth/ResetPasswordMail'
import AppendReview from './components/AppendReview/AppendReview'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />}/>
      <Route path='/group' element={<Group />}/>
      <Route path='/review' element={<Review />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/searched' element={<Searched />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/resetpassmail' element={<ResetPasswordMail />}/>
      <Route path='/addreview' element={<AppendReview />}/>
    </Routes>
  </Router>
  )
}

export default App
