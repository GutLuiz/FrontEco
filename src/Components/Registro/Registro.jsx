import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Importa os ícones
import { Link } from "react-router-dom"; // Importa o Link
import { registerUser } from '../../services/register-service';
import "./Registro.css"; 

const Registro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState(""); 
  const [isLogin, setIsLogin] = useState(false); 

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      senha: senha,
    };

    try {
      const response = await registerUser(userData);
      console.log("Usuário registrado com sucesso:", response);
      setMessage("Usuário registrado com sucesso!"); 
      
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setMessage("Erro ao registrar usuário: " + error.message); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, senha);
      console.log("Login bem-sucedido:", response);
      setMessage("Login realizado com sucesso!"); 
      
    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Credenciais inválidas!"); 
    }
  };

  return (
    <div className="container">
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          
          <button type="submit">Login</button>

          {/* Mensagem de feedback */}
          {message && <p>{message}</p>}

          <div className="register-link">
            <p>
              Não tem uma conta? <Link to="#" onClick={() => setIsLogin(false)}>Registrar</Link>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <h1>Crie sua conta</h1>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          
          <button type="submit">Registrar</button>

          {/* Mensagem de feedback */}
          {message && <p>{message}</p>}

          <div className="login-link">
            <p>
              Já tem uma conta? <Link to="#" onClick={() => setIsLogin(true)}>Login</Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Registro;

