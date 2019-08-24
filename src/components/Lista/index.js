import { Sortable } from '@shopify/draggable';
import React,{useEffect} from "react";

import Foto from '../Foto';

let Lista = ({fotos,onClickFoto,obtenerFotosSeleccionada}) => {

    useEffect(() => {
        
        new Sortable(document.querySelectorAll('.columns'), {
            draggable: '.lista__foto'
        });

    }, []);

    return (
        <div className="lista columns is-multiline is-0 is-mobile">
            {
                fotos.map( (foto,index) => <Foto key={index} {...foto} obtenerFotosSeleccionada={obtenerFotosSeleccionada} onClickFoto={onClickFoto}  />)
            }
        </div>
    )
}

export default Lista