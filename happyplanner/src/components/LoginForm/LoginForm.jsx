import React from "react";
import { useState } from "react";
import './LoginForm.css';
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    
    setError("");
    alert(`Iniciando sesión con:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="input-box">
        <input 
          type="email" 
          placeholder="Username" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CiUser className="icon" />
      </div>
      <div className="input-box">
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <IoLockClosedOutline className="icon" />
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
        <p>No tienes cuenta? <a href="#">Crear cuenta</a></p>
      </div>
    </form>
    <p>prueba rama</p>
  </div>
  );
}
