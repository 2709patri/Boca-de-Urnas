import React, { useState } from 'react';
import './App.css';

function App() {
  const [conteoCandidato1, setConteoCandidato1] = useState(0);
  const [conteoCandidato2, setConteoCandidato2] = useState(0);

  const aumentarCandidato1 = () => {
    setConteoCandidato1(conteoCandidato1 + 1);
  };

  const disminuirCandidato1 = () => {
    if (conteoCandidato1 > 0) {
      setConteoCandidato1(conteoCandidato1 - 1);
    }
  };

  const aumentarCandidato2 = () => {
    setConteoCandidato2(conteoCandidato2 + 1);
  };

  const disminuirCandidato2 = () => {
    if (conteoCandidato2 > 0) {
      setConteoCandidato2(conteoCandidato2 - 1);
    }
  };

  return (
    <>
      <h1>BOCA DE URNAS</h1>
      <div class='candidato'>
        <h2>Candidato 1</h2>
         <p>{conteoCandidato1}</p>
        <button onClick={aumentarCandidato1}>+</button>
        <button onClick={disminuirCandidato1}>-</button>
        </div>
        <div class='candidato1'>
        <h2>Candidato 2</h2>
         <p>{conteoCandidato2}</p>
        <button onClick={aumentarCandidato2}>+</button>
        <button onClick={disminuirCandidato2}>-</button>
       
      </div>
    </>
  );
}

export default App;
