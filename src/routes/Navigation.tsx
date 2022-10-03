import React, { Suspense } from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className='wrapper'>
                <nav>
                    <img src={ logo } alt='Logo React' />
                    <ul>
                        { routes.map( ({to, name}) => <li  key={name}><NavLink to={to} className={ ({ isActive }) => isActive ? 'active' : '' } >{name}</NavLink></li> ) }
                    </ul>
                </nav>
                <Routes>
                    { routes.map( ({ path, Component, name }) => <Route path={path} element={ <Component/> } key={name}></Route>  ) }
                    <Route path='/*' element={ <Navigate to='/dashboard' replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation