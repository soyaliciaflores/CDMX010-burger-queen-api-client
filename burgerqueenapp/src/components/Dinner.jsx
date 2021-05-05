import React from 'react';
import {useHistory} from 'react-router-dom'
const Dinner = () => {
    return (
        <div className="container-main-dinner">
            <div className="container-header-dinner">
            <h1 className="h1-dinner">Comida</h1>
            <form className="container-header-dinner">
            <h5 className="h5-dinner">Cliente:</h5>
            <input type="text" id="input-cliente"></input>
            <button className="button-acept-dinner">Aceptar</button>
            </form>
            </div>
            <div className="container-options-menu">
                <div>
            <p className="p-dinner">Hamburguesas</p>
            <div>
            <div className="container-line">
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Doble</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Sencilla</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            </div>       
        </div>
        <p className="p-dinner">Acompañamientos</p>
        <div>
            <div className="container-line">
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Papas</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            <div className="container-options-dinner">
            <h4 className="h4-dinner">A. cebolla</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            </div>       
        </div>
        <p className="p-dinner">Bebidas</p>
        <div>
            <div className="container-line">
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Agua 500 ml</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Agua 750</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            </div>       
        </div>
        <div>
            <div className="container-line">
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Gaseosa Ch</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            <div className="container-options-dinner">
            <h4 className="h4-dinner">Gaseosa Gde.</h4>
            <div className="line-options">
            <div>
                <h4 className="sign-dinner">+</h4>
            </div>
            <div>
                <h4 className="sign-dinner">-</h4>
            </div>
            </div>
            </div>
            </div>       
        </div>
        </div>
            <div>
                <div>
                    <div className="container-list-head">
                    <h3>Cant</h3>
                    <h3>Descripcion</h3>
                    <h3>Total</h3>
                    </div>
                    <div className="container-list">
                    <div className="container-cant"></div>
                    <div className="container-descript"></div>
                    <div className="container-total"></div>
                    </div>
                    <div className="container-final-total">
                    <div>
                        <h3>Total</h3>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <form>
            <div className="container-footer">
            <button className="button-dinner-m">Actualizar</button>
            <button className="button-dinner-m">Regresar</button>
            <button className="button-dinner-m">Salir</button>
            <button className="button-dinner-m">Completado</button>
            <div className="timer">
                <h4>Timer:</h4>
            </div>
            </div>
        </form>
        <form className="menssage-cook">
            <input type="text" className="input-message"></input>
            <div className="container-buttons">
                <button className="button-acept-dinner">Eliminar</button>
                <button className="button-acept-dinner">Enviar</button>
            </div>
        </form>
        </div>
    )
};
export default Dinner;