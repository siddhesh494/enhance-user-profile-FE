import { useEffect, useState } from 'react';
import './App.css';
import PageRouting from './components/PageRouting';
import { verifyJWTToken } from './APIService/auth';
import { isEmpty } from 'lodash';
import { getCookie, setCookies } from './utils/utils';

function App() {
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    if(!isEmpty(userDetails)) {
      setCookies("auth", userDetails.token, 1)
    }
  }, [userDetails])


  return (
    <div>
      <PageRouting
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </div>
  );
}

export default App;
