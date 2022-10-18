import React from "react";
import InfoUsuario from "./infoUsuario";
import '../componentes/cardVideo.css';

const CardVideo = () => { //criamos a função arrow function aqui. 
    
    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
  }
    
       
    return (//todas as fuções e variáveis tem que vir em acima do return. 
        
        
                    
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <InfoUsuario/>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>            
          
        
    
    )
}


export default CardVideo; //chama a função para o mundo.

