import React from "react";
import CardVideo from "./componentes/cardVideo";
import InfoUsuario from "./componentes/infoUsuario";
import "./styles.css";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return ( //todas as fuções e variáveis tem que vir em acima do return. 
    <div>      
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <CardVideo/>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
