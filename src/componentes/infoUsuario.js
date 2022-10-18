import React from "react";
import imagem from "../componentes/minhaFoto.jpeg";
import './infosUsuario.css';

export default function InfoUsuario(){ //cria função e já chama ela;
// se não usar o default, vou ter que colocar {} lá no App, na linha que está importando o InfoUsuario;
    
let usuarioNome = "Túlio Leitão"

    return(
        
        <div className="container">         
            <img id="perfil" src={imagem} alt=""/>
            <h4>{usuarioNome}</h4>

        </div> // chame a função colocando ela entre {};
    )

}

