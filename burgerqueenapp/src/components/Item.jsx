import React from 'react';

function Item(props){
    return(
        <div>
         <p className='descript'> {props.item.name}  - ${props.item.cost}</p> 
        </div>

    );
}

export default Item;