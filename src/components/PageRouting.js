import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Navbar from '../utilities/Navbar'

const PageRouting = ({
  userDetails,
  setUserDetails
}) => {
  return (
      <BrowserRouter>
        
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage 
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            )}
          />
          <Route
            exact
            path="/signIn"
            render={() => (
              <SignIn 
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            )}
          />
          <Route
            exact
            path="/signUp"
            render={() => (
              <SignUp 
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
  )
}

export default PageRouting