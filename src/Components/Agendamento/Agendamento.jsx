import React, { useState } from 'react';
import './Agendamento.css';
import { agendarUser } from '../../services/agendamento-service'; // Importar o serviço para agendamento

const Agendamento = () => {
    const [nome, setNome] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [data, setData] = useState(''); // Manter apenas o estado da data
    const [resultado, setResultado] = useState('');

    const handleSubmit = async () => {
        // Verificar se todos os campos estão preenchidos
        if (!nome || !modelo || !placa || !data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Cria o objeto de dados do usuário
        const userData = {
            nome,
            modelo,
            placa,
            data, // Enviar apenas a data
        };

        console.log('Dados enviados:', userData); // Para depuração

        try {
            const response = await agendarUser(userData);
            console.log('Usuário agendado:', response);
            setResultado(`Agendamento realizado com sucesso!`);
        } catch (error) {
            console.error('Erro ao agendar usuário:', error);
            alert('Erro ao agendar: ' + error.message);
        }
    };

    return (
        <div className="container">
            <h1>Cadastro de Carro</h1>

            <label htmlFor="nome">Nome da Pessoa:</label>
            <input 
                type="text" 
                id="nome" 
                placeholder="Digite o nome da pessoa" 
                value={nome}
                onChange={(e) => setNome(e.target.value)} 
            />

            <label htmlFor="modelo">Modelo do Carro:</label>
            <input 
                type="text" 
                id="modelo" 
                placeholder="Digite o modelo do carro" 
                value={modelo}
                onChange={(e) => setModelo(e.target.value)} 
            />

            <label htmlFor="placa">Placa do Carro:</label>
            <input 
                type="text" 
                id="placa" 
                placeholder="Digite a placa do carro" 
                value={placa}
                onChange={(e) => setPlaca(e.target.value)} 
            />

            <label htmlFor="data">Data:</label>
            <input 
                type="date" // Manter o campo como data
                id="data" 
                value={data}
                onChange={(e) => setData(e.target.value)} 
            />

            <button onClick={handleSubmit}>Enviar</button>
            <div id="resultado">{resultado}</div>
        </div>
    );
};

export default Agendamento;
