import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Navbar from '../utilities/Navbar'

const PageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage />
            )}
          />
          <Route
            exact
            path="/signIn"
            render={() => (
              <SignIn />
            )}
          />
          <Route
            exact
            path="/signUp"
            render={() => (
              <SignUp />
            )}
          />
        </Switch>
      </BrowserRouter>
      
      
    </div>
  )
}

export default PageRouting