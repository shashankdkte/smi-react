import React, { useEffect, useState } from 'react';
import "./style.css"
const URL = "https://api.github.com/users"
function FetchGithub() {
  const [users, setUsers] = useState([]);
  
  async function fetchUsers()
  {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  },[])
  return (
    <div className='main-container'>
      {users.map(user => {
        return (
          <div key={user.id} className='user'>
            <img src={user.avatar_url} alt=""
              style={{ width: "6rem", borderRadius:"50%" }} />
            <div className="content">

            <p>{user.login}</p>
            <p>{user.url}</p>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default FetchGithub