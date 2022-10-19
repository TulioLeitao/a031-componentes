import React from "react";
import imagem from "../componentes/minhaFoto.jpeg";
import './infosUsuario.css';

export default function InfoUsuario(props){ //cria função e já chama ela;
// se não usar o default, vou ter que colocar {} lá no App, na linha que está importando o InfoUsuario;

    console.log(props)
    


    return(
        
        <div className="container">         
            <img id="perfil" src= {props.info.imagemPerfil} alt=""/>
            <h4>{props.info.nomeUsuario}</h4>

        </div> // chame a função colocando ela entre {};
    )

}

