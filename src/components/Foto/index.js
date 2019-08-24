import React from "react";

export default function Foto({thumbnailUrl,title,url,onClickFoto,obtenerFotosSeleccionada}){

    let handerOnClick = ()=>{
        obtenerFotosSeleccionada({title,url});
        onClickFoto();
    }

    return (
        <div className="lista__foto column is-one-third-mobile" onClick={handerOnClick}>
            <figure className="image is-128x128">
                <img src={thumbnailUrl} />
            </figure>   
        </div>
        
    )
}