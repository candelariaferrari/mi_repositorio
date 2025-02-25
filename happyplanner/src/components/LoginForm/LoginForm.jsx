import React from "react";
import './LoginForm.css';
const LoginForm = () =>{
  return ( 
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
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