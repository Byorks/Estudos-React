import { useState } from "react";

/* Componente é uma função */
function App() {
  // State (Estado)
  const [message, setMessage] = useState("Olá Mundo!");
  // useState vai atualizar a tela após alguma mudança ser realizada

  // let message = "Olá mundo";
  // Podemos retornar apenas um elemento mãe
  return (
    <div>
      <h1> {message} </h1>
      <button onClick={() => {
          setMessage("Olá, fui clicado!")
      }}> 
      Mudar mensagem</button>
    </div>
  );
}

export default App;
