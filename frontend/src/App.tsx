import React, { useEffect } from 'react'

import CreateIcecream from './icecreams/CreateIcecream'
import ListIcecream from './icecreams/ListIcecream'
import DetailIcecream from './icecreams/DetailIcecream'
import UpdateIcecream from './icecreams/UpdateIcecream'

import CreateUser from './users/CreateUser'
import ListUser from './users/ListUser'
import DetailUser from './users/DetailUser'
import UpdateUser from './users/UpdateUser'

import LoginForm from './auth/LoginForm'
import RegisterForm from './auth/RegisterForm'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

import { useQuery } from 'react-query'

import client, { fetchCSRFToken, hasCSRFToken } from './api'

function App() {
  const { data: user } = useQuery('user', () => client.get('/auth/me'), {
    retry: false,
  })

  useEffect(() => {
    if (!hasCSRFToken()) fetchCSRFToken()
  }, [])

  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/icecreams'>Icecreams</Link>
            <br />
            <Link to='/icecreams/create'>Create a Icecream</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/users'>Users</Link>
            <br />
            <Link to='/users/create'>Create a User</Link>
            <br />
          </li>
        </ul>
      </nav>
      <main>
        <Route path='/icecreams'>
          <h1>Icecreams</h1>
        </Route>

        <Route path='/users'>
          <h1>Users</h1>
        </Route>

        <Switch>
          {/* Icecream routes */}
          <Route path='/icecreams/create' component={CreateIcecream} />
          <Route path='/icecreams/update/:id' component={UpdateIcecream} />
          <Route path='/icecreams/detail/:id' component={DetailIcecream} />
          <Route path='/icecreams' component={ListIcecream} />,
          {/* User routes */}
          <Route path='/users/create' component={CreateUser} />
          <Route path='/users/update/:id' component={UpdateUser} />
          <Route path='/users/detail/:id' component={DetailUser} />
          <Route path='/users' component={ListUser} />
          {/* auth routes */}
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
