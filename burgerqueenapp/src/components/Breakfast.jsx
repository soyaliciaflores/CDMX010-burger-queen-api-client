import React, { useState } from 'react';
import Product from './Product'
import Order from './Order'

export default function PedidoBreakfast(props){
    
    const handleAddItem=(item)=>{
        props.setOrder({...props.order, items:[...props.order.items,item]})
    }

    const products=[
        {id:1, name: 'Café americano', cost: 5},
        {id:2, name: 'Café con leche', cost: 7},
        {id:3, name: 'Sandwich de jamón y queso', cost: 10},
        {id:4, name: 'Jugo de frutas natural', cost: 7}
    ]

    return (
        <div>
            {products.map(item=><Product item={item} key={item.id} handleAddItem={handleAddItem}/>)}
            <Order order={props.order}/>
        </div>
        
    )
};
