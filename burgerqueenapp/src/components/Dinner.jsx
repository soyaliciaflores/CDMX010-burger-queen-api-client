import React from 'react';


const Dinner = () => {


    return (
        <div>
            <h1>Comida</h1>
            <form>
            <h4>Cliente:</h4>
            <input type="text" placeholder="Nombre del cliente"></input>
            <button>Aceptar</button>
            </form>
            <div>
            <p id="textPage">Hamburguesas</p>
        <div>
        <div>
            <h4>Doble</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            <h4>Sencilla</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            </div>
            <p id="textPage">Acompañamientos</p>
            <div>
            <h4>Papas</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            <h4>A. cebolla</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            </div>
            <h2>Bebidas</h2>
            <div>
            <h4>Agua 500 ml</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            <h4>Agua 750 ml</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            <h4>Gaseosa Ch</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            <h4>Gaseosa Gde</h4>
            <div>
                <h4>+</h4>
            </div>
            <div>
                <h4>-</h4>
            </div>
            </div>
        </div>
        </div>

        <form>
            <input type="text" placeholder="Enviar mensaje a cocina"></input>
                <button>Eliminar</button>
                <button>Enviar</button>
        </form>
        <form>
            <div>
                <div>
                    <h3>Cant</h3>
                    <div></div>
                    <h3>Descripcion</h3>
                    <div></div>
                    <h3>Total</h3>
                    <div></div>
                    <div>
                        <h3>Total</h3>
                    </div>
                </div>
            </div>
            <button>Actualizar pedido</button>
            <button>Regresar</button>
            <button>Salir</button>
            <button>Completado</button>
            <div>
                <h4>Timer:</h4>
            </div>
        </form>
        </div>
    )
};
export default Dinner;