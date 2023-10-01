import React, { useEffect, useState } from 'react';
const URL = "https://api.github.com/users/QuincyLarson"
function MultipleReturns() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({})
  
  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then(res => {
        if (res.status >= 200 && res.status <= 299)
        {
          return res.json();
        }
        else
        {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.status);
        }
      })
      .then(data => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
    })
  }, [])
  
  if (isLoading)
  {
   return <h1>Loading...</h1>
  }
  if (isError)
  {
    return <h1>Error...</h1>
    }
  return (
    <h1>{user.login}</h1>
  )
}

export default MultipleReturns