import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { loginUser } from '../../services/login-service';
import "./Login.css";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 

 
  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: username, 
      senha: password, 
    };

    try {
      
      const response = await loginUser(userData);
      console.log("Login bem-sucedido:", response);
      setMessage("Login realizado com sucesso!"); 
    
    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Credenciais inválidas!"); 
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Entre na sua conta</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>

        {/* Mensagem de feedback */}
        {message && <p>{message}</p>}
        
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/registro">Registrar</Link> {/* Usando Link para navegação */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
