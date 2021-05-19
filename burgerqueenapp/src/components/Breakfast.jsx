import React, { useState } from 'react';


export const PedidoBreakfast = () =>{

    const [CafeAmericano, setCafeAmericano] =useState(0) 
    const Subir=() => {
        setCafeAmericano(CafeAmericano + 1)
    }
    const Bajar=() => {
        setCafeAmericano(CafeAmericano - 1)
    }

  
    return (
        <div className="container-main-dinner">
            <div className="container-header-dinner">
            <h1 className="h1-dinner">Desayuno</h1>
            <form className="container-header-dinner">
            <h5 className="h5-dinner">Cliente:</h5>
            <input type="text" id="input-cliente"></input>
            <button className="button-acept-dinner">Aceptar</button>
            </form>
            </div>
            <div className="container-options-menu">
                <div className="container-left">
            <p className="p-dinner">Café</p>
            <div>
            <div className="container-line-breakf">
            <div className="container-options-breakf">
            <h4 className="h4-dinner">Americano</h4>
            <div className="line-options">
            <div>
                <button className="sign-dinner" onClick={Subir} >+</button>
            </div>
            <div>
                <button className="sign-dinner" onClick={Bajar}>-</button>
            </div>
            </div>
            </div>
            <div className="container-options-breakf">
            <h4 className="h4-dinner">Con leche</h4>
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
        <p className="p-dinner">Sandwich</p>
        <div>
            <div className="container-line-breakf">
            <div className="container-options-breakf">
            <h4 className="h4-dinner">Jamon y queso</h4>
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
        <p className="p-dinner">Jugos</p>
        <div>
            <div className="container-line-breakf">
            <div className="container-options-breakf">
            <h4 className="h4-dinner">Natural de frutas</h4>
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
                    <div className="container-cant">
                        <h2> {CafeAmericano}</h2>
                    </div>
                    <div className="container-descript">
                    <p>
                      {
                        CafeAmericano > 0 ? 'Café Americano' : ''
                      }
                    </p>
                    </div>
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
export default PedidoBreakfast;
