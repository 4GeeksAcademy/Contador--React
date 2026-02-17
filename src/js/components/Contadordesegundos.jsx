import React from 'react'
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faClock } from '@fortawesome/free-solid-svg-icons';

function Contadordesegundos() {

    const [cuenta, setCuenta] = useState(0)

    const [estaCorriendo, setEstaCorriendo] = useState(true)



    useEffect(() => {
        let intervalo = null;



        if (estaCorriendo) {
            intervalo = setInterval(() => {
                setCuenta((prevCuenta) => prevCuenta + 1);
            }, 1000);


        }
        else {
            clearInterval(intervalo);
        }


        return () => clearInterval(intervalo);
    }, [estaCorriendo]);



    const marcador = String(cuenta).padStart(6, '0')




    return (
        <div className="bg-dark vh-100 d-flex flex-column align-items-center justify-content-center text-white">
            <h2 className="mb-4 fw-bold text-uppercaset">Contador</h2>
            <div className="d-flex aling-intems-center bg-black border border-danger border-3 p-4 rounded-3 shadow-lg">
                <FontAwesomeIcon className="text-danger me-3 display-4" icon={faClock} />
                <span className="display-1 fw-bold font-monospace">
                    {marcador}
                </span>
            </div>


            <div className="d-flex gap-3 mt-4">
                <button
                    onClick={() => setEstaCorriendo(!estaCorriendo)}
                    className={'btn btn-lg btn-success rounded-0 px-4'}>
                    <FontAwesomeIcon icon={faPause} size="xl" /> </button>


                <button
                    onClick={() => { setCuenta(0); setEstaCorriendo(false); }}
                    className="btn btn-secondary btn-lg rounded-0 px-4">
                    <FontAwesomeIcon icon={faStop} size="xl" />
                </button>

            </div>
            <hr className="w-75 mt-5 opacity-25" />
        </div>
    );

}

export default Contadordesegundos;