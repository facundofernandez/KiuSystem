import React,{useState} from "react";

export default function Modal(props){
    if(props.show) {
        return (
            <div className={`modal is-active`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    {props.children}
                </div>
                <button onClick={props.onClose} className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }else{
        return null
    }

}
