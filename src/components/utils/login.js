import React, { useState } from 'react';

function Login({ showLogin }) { // Recebe a função showLogin como uma prop
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para autenticar o usuário com email e senha
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Register / Login </h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {showLogin && (
          <button onClick={showLogin}>Register now</button>
        )}
      </div>
    </div>
  );
}

export default Login;
