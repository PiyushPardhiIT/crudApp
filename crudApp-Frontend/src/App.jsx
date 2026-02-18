import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar.jsx';
import Home from './pages/Home.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddUsers from './users/AddUsers.jsx';
import EditUsers from './users/EditUsers.jsx';
import ViewUsers from './users/ViewUsers.jsx';   // ✅ THIS WAS MISSING

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUsers />} />
          <Route path='/edituser/:id' element={<EditUsers />} />
          <Route path='/viewuser/:id' element={<ViewUsers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
