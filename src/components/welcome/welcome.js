import React, { useState } from 'react';
import './welcome.css'

const WelcomeMessage = (props) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (event) => {
    setName(event.target.value);
    setSubmitted(false); // Redefine o estado submitted para falso quando o input é alterado
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Olá! {props.name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder="Digite seu nome" />
      <button onClick={handleSubmit}>Enviar</button>
      {submitted && <h1>Olá! Seja bem-vindo(a), {name}!</h1>}
    </div>
  );
};

export default WelcomeMessage;
