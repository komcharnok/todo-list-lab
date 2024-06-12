// import React from 'react'
import { useContext } from "react";

// import useAuth from '../hooks/useAuth'
import AuthContext from "../contexts/AuthContext";


function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      {/* <p>{JSON.stringify(user)}</p> */}
      <p>id : {user.id}</p>
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>

    </div>
  )
}

export default Profile