import React from 'react';

function Product(props){
    const {name, cost} = props.item;
    
    return(
        <div className="container-main-dinner">
            
            <div className="container-line-breakf">
            <div className="container-options-breakf" onClick={()=>{(props.handleAddItem(props.item))}} >
            <h4 className="h4-dinner">{name}</h4>
            <div className="line-options">
            <div>
                <button className="sign-dinner" >+</button>
            </div>
            <div>
                <button className="sign-dinner" >-</button>
            </div>
            </div>
            </div>
            <div/>
            </div>
        </div>
    )
}
export default Product;