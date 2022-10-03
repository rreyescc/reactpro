import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Service2, Contact2 } from '../pages'

const LazyHomeLayout = () => {


  return (
    <>
      <ul>
        <li>
          <NavLink to='service'>Service</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='service' element={ <Service2/> } />
        <Route path='contact' element={ <Contact2/> } />
        <Route path='*' element={ <Navigate replace to='service' /> } />
      </Routes>
    </>
  )
}

export default LazyHomeLayout