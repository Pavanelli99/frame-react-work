import React, { useState } from 'react';
import './styles.css';

function Register({ showLogin }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica para cadastrar o usuário com nome, email e senha
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <br></br>
        <button type="button" onClick={handleCadastro}>
          Register
        </button>
        <br></br>
        {/* {showLogin && (
          <button onClick={showLogin}>Go to login</button>
        )} */}
         <br/>
        <button onClick={showLogin}>Go to login</button>
      </form>
    </div>
  );
}

export default Register;
