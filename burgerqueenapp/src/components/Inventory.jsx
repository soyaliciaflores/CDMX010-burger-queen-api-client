import React from 'react';
import onion from '../assets/onion.png'

const Inventory = () => {


    return (
        <div>
            <div className="cardInventory"> 
                <img className="itemInventory" src={onion}></img>
                <p id="textoncard">cantidad</p>
                    <div className="spaceforbuttoncard">
                        <button className="buttonIncreaseDecrease">+</button> 1 <button className="buttonIncreaseDecrease">-</button>
                    </div>
                <p id="textoncard">medida</p>
                <div className="spaceforkg"></div>

            </div>
        </div>
    )
};

export default Inventory;
