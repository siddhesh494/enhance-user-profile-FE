import React, { useEffect, useState } from 'react'
import { signIn } from '../APIService/auth'
import { getCookie } from '../utils/utils'

function SignIn({
  setUserDetails,
  setToken
}) {

  const [email, setEmail] = useState("sid1@gmail.com")
  const [password, setPassword] = useState('1234567')
  
  const supInUser = async () =>{
    try {
      if(email && password) {
        const response = await signIn({
          email: email,
          password: password
        })
        console.log("response", response)
        if(response) {
          setUserDetails({
            email: response.email,
            userID: response.user_id
          })
          setToken(response.accessToken)
          window.location = '/'
        }
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const checkUserToken = () => {
    try {
      const token = getCookie("auth")
      if(token) {
        window.location = "/"
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUserToken()
  }, [])

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 p-6 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Sign In</h1>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              value={email || ''}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              value={password || ''}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            onClick={supInUser}
          >
            Sign In
          </button>
        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account? <a href="/signUp" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default SignIn