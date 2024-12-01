import { useEffect, useState } from 'react';
import './App.css';
import PageRouting from './components/PageRouting';
import { verifyJWTToken } from './APIService/auth';
import { removeCookie, setCookies } from './utils/utils';

function App() {
  const [userDetails, setUserDetails] = useState({})
  const [token, setToken] = useState(null)

  useEffect(() => {
    if(token) {
      setCookies("auth", token, 1)
    }
  }, [token])

  const verifyJWR = async () => {
    try {
      const response = await verifyJWTToken()
      if(response && response.email && response.user_id) {
        setUserDetails({
          email: response.email,
          userID: response.user_id
        })
      }
    } catch (error) {
      console.log(error)
      removeCookie('auth', '/signIn')
      setToken(null)
    }
  }

  useEffect(() => {
    if(!(window.location.pathname === '/signUp' || window.location.pathname === '/signIn')) {
      verifyJWR()
    }
  }, [])


  return (
    <div>
      <PageRouting
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        setToken={setToken}
      />
    </div>
  );
}

export default App;
