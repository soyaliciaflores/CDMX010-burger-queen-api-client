import React from 'react'
import Item from './Item'

function Order(props){
    return (
        <div>
            
            <div>
                <div>
                    <div className="container-list-head">
                    <h3>Descripcion</h3>
                    <h3>Total</h3>
                    </div>
                    <div className="container-list">
                    
                    <div className="container-descript">
                    {props.order.items.map(item =><Item item={item}/>)}
                    </div>
                    
                    </div>
                    <div className="container-final-total">
                    <div>
                        <h3>Total</h3>
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
        
        </div>
    )
}

export default Order;