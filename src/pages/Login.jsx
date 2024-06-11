import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setUser, setIsLogin } = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    e.preventDefault();
    if (!input.name.trim() || !input.password.trim()) {
      return alert("please fill all inputs");
    }
    try {
      const res = await axios.get(`http://localhost:8000/users?name=${input.name}`);
      if (!res.data.length) {
        setError('Invalid Login');
        return;
      }
      const foundUser = res.data[0];
      // check password ว่าตรงกับ input.password หรือไม่
      if (foundUser.password !== input.password) {
        setError('Invalid Login');
        return;
      }
      // เก็บค่า user ที่ login ไว้ที่ AuthContext:user / localStorage
      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      setIsLogin(true);

      navigate('/'); 

    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Login form</h1>
      <form className="login-form" onSubmit={hdlSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Username :
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={hdlChange}
          />
        </label>
        <label>
          Password :
          <input
            type="password"  // ใช้ type="password" เพื่อความปลอดภัย
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
