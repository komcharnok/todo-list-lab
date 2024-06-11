import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();

  const { isLogin, user, setUser, setIsLogin } = useContext(AuthContext);

  const hdlLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLogin(false);
    navigate('/');
  }

 

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <nav>
        <Link to='/'>Home</Link>
        {!isLogin && <Link to="/login">Login</Link> }
        {!isLogin && <Link to="/register">Register</Link> }        
        {isLogin && <Link to="/profile">Profile</Link>}
        {isLogin && <Link to="/jobtodo">Jobtodo</Link>}
        
      </nav>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4>Hi, {isLogin ? user.name : 'Guest'}</h4>
        {isLogin && <button style={{ height: '30px' }} onClick={hdlLogout}>Logout</button>}
      </div>
    </header>
  );
}

export default Header;
