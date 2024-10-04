import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importando Routes e Route
import Login from "./Components/Login/Login";
import Registro from "./Components/Registro/Registro";
import "./App.css";
import Agendamento from './Components/Agendamento/Agendamento';



function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define as rotas para Login e Registro */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
         {/* Rota para visualização do Agendamento */}
          <Route path="/agendamento" element={<Agendamento />} />
          <Route
            path="/"
            element={
              isLogin ? <Login /> : <Registro /> // Alterna entre Login e Registro
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
