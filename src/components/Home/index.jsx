import React from 'react';
import Login from '../utils/login'; 
import Register from '../utils/register'; 

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Login />
      <Register />
    </div>
  );
}

export default Home;
