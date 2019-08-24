import React,{Fragment,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "../sass/main.scss";
import axios from 'axios';

import Lista from './components/Lista';
import Modal from './components/Modal';

function App(){

    const URL_FOTOS = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
    const [fotos, obtenerFotos] = useState([]);
    const [fotoSeleccionada, obtenerFotosSeleccionada] = useState({});
    const [estadoModal, CambiarEstadoModal] = useState(false);

    let mostrarModal = e => CambiarEstadoModal(true);
    let cerrarModal = e => CambiarEstadoModal(false);

    // Ordenar Vocales
    let ordenarFotos = (fotos) => {

        // Cuento cantidad de  Vocales en el titulo
        let calcularVocales = (texto)=> texto.split('').filter(letra => /[aeiouAEIOU]/.test(letra)).length;

        // Ordeno
        return fotos.sort((a,b)=>{

            let aVocales = calcularVocales(a.title);
            let bVocales = calcularVocales(b.title);
            a.vocales= aVocales;
            b.vocales= bVocales;
            // Ordenar por Vocales
            if(aVocales > bVocales) return 1
            if(aVocales < bVocales) return -1
            // Ordenar por id
            if(aVocales === bVocales) {
                if(a.id > b.id) return -1
                if(a.id < b.id) return 1
            }
        })
    }


    useEffect( () => {
        axios(URL_FOTOS)
            .then(({data}) => obtenerFotos(ordenarFotos(data)) )
            .catch((error) => console.log(error) );
    },[]);
    

    return (
        <div className="container">
            <h1 className="title is-1">Examen Kiu</h1>
            
            <Lista fotos={fotos} obtenerFotosSeleccionada={obtenerFotosSeleccionada} onClickFoto={mostrarModal} />

            <Modal className="modal-foto" show={estadoModal} onClose={cerrarModal}>
                <div className="image is-4by3">
                    <img src={fotoSeleccionada.url} alt="foto" />
                </div>
                <h6 className="modal-foto__titulo subtitle is-6">{fotoSeleccionada.title}</h6>
            </Modal>
        </div>
    )
}

ReactDOM.render( <App/> , document.getElementById("app"));