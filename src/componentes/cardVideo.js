import React from "react";
import InfoUsuario from "./infoUsuario";
import '../componentes/cardVideo.css';
import ImagemUsuario from "../componentes/minhaFoto.jpeg";

const CardVideo = (props) => { //criamos a função arrow function aqui, o Props recebe as informações de seu pai, o APP 
    
  console.log(props) //para vizualizar os objetos
   
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
  }

  let usuarioNome = "Túlio Leitão"
  
  const info = {
    imagemPerfil: {ImagemUsuario},
    nomeUsuario: usuarioNome

  }
    
       
    return (//todas as fuções e variáveis tem que vir em acima do return. 
        
        
                    
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <InfoUsuario info = {info}/>
              <img src= {props.meusVideos.imagem} alt=""/>
              <h4>{props.meusVideos.nome}</h4>
            </div>            
          
        
    
    )
}


export default CardVideo; //chama a função para o mundo.

