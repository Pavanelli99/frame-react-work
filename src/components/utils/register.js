import React, { useState } from 'react';

function Cadastro() {
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
      <h2>Cadastro</h2>
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
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
