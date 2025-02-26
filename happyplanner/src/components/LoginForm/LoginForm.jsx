import React from "react";
import './LoginForm.css';
//icons
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

const LoginForm = () =>{
  return ( 
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <CiUser className="icon"/>
        </div>
        <div className="input-box">
       
          <input type="password" placeholder="Password" required/>
          <IoLockClosedOutline className="icon"/>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Ingresar</button>
        <div className="register-link">
          <p>No tienen cuenta? <a href="#">Crear cuenta</a></p>
        </div>
      </form>
    </div>
  )
}
export default LoginForm;