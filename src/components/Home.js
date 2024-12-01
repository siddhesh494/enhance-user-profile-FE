import React, { useEffect } from 'react'
import { getCookie } from '../utils/utils'

function Home() {

  const checkUserToken = () => {
    try {
      const token = getCookie("auth")
      if(!token) {
        window.location = "/signIn"
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUserToken()
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default Home