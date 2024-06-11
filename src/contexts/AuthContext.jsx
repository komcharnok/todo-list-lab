import React,{createContext, useState} from 'react'

const AuthContext = createContext()

const userLogin = localStorage.getItem('user')

function AuthContextProvider(props) {
  const [isLogin, setIsLogin] = useState(!!userLogin)
  const [user, setUser] = useState(JSON.parse(userLogin))


  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContextProvider}
export default AuthContext