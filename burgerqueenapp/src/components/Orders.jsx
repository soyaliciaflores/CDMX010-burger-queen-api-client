import React from 'react';
import Product from './Product'
import Order from './Order'
import logoBurguerQueen from '../assets/logoBurguerQueen.png'

const Orders = (props) => {
    const handleAddItem=(item)=>{
        props.setOrder({...props.order, items:[...props.order.items,item]})
    }

    return (
        <div>
            <div className='title-order'>
        <h1 className="h1-order">Orden</h1>
        </div>
         <div className='container-header-order'>
            <img className='logo-Order' src={logoBurguerQueen}></img>
            <h4>Mesero:</h4>
            <div className="timer">
            <h4>Timer:</h4>
        </div>
            </div >
           <div className='container-orders-containers'>
            <div className='container-orders'>
            <div className='container-cant-orders'></div>
            <div className='container-desc-orders'>
            </div>
            </div>
            <div className='container-ligths'></div>
            <div className='container-waiters-orders'></div>
            </div>
            <div className='container-button-order'>
            <button className="button-acept-dinner">Terminado</button>
            </div>

        </div>
    )
};

export default Orders;