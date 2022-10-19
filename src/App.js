import React from "react";
import CardVideo from "./componentes/cardVideo";
import InfoUsuario from "./componentes/infoUsuario";
import "./styles.css";

export default function App() {
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  const meusVideos = {
    nome: "Vídeo do Túlio",
    imagem: "https://picsum.photos/400/400?a=1"

  }
  return ( //todas as fuções e variáveis tem que vir em acima do return. 
    <div>      
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
            </nav>
            <section className="painel-de-videos"> 
            <CardVideo meusVideos = {meusVideos}/> 
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
            <CardVideo meusVideos = {meusVideos}/>
                        
            </section>
            
        
        
        
        </main>

        

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
