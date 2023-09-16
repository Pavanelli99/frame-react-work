import React, { useState } from 'react';
import Login from '../utils/login';
import Register from '../utils/register';
import './styles.css';

function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const showLogin = () => {
    setIsLoginVisible(true);
    setIsLoginFormVisible(true);
  };

  const showRegister = () => {
    setIsLoginVisible(false);
    setIsLoginFormVisible(false);
  };

  return (
    <div className="body">
      <div className="container">
        <div className={isLoginVisible ? 'form' : 'form'}>
          <h2>{isLoginVisible ? 'Bem-vindo' : 'Cadastro'}</h2>
          {isLoginFormVisible && (
            <>
              {isLoginVisible ? (
                <Login onLogin={showRegister} />
              ) : (
                <Register showLogin={showLogin} />
              )}
            </>
          )}
        </div>
        <div className="form">
          {isLoginVisible ? (
            <button onClick={showRegister}>Register now</button>
          ) : (
            <Register showLogin={showLogin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
