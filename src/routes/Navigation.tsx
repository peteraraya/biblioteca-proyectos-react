import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import logo from '../logo.svg';
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo"></img>
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ to, path, Component }) => (
                <Route
                  key={to}
                  path={path}
                  element={<Component />}
                />
              ))
            }

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
