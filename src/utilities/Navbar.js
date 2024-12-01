import React, { useEffect, useState } from 'react'
import { getCookie, removeCookie } from '../utils/utils'

function Navbar() {

  const [showLogout, setShowLogout] = useState(false)
  const checkUserToken = () => {
    try {
      const token = getCookie("auth")
      if(token) {
        setShowLogout(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUserToken()
  }, [])

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-xl text-white font-bold">
          Product
        </span>

      {showLogout ? (
        <button 
          className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          onClick={() => {
            removeCookie('auth')
          }}  
        >
          Logout
        </button>
      ) : null}
        
      </div>
    </nav>
  )
}

export default Navbar