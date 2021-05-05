import React, { Fragment, useState } from 'react';
import onion from '../assets/onion.png'

const Inventory = () => {

    const [number, setNumber] = useState(0) 

    const Increase = () => {
        setNumber (number + 1)
    }

    const Decrease = () => {
        setNumber (number - 1)
    }


    return (
        <div>
            <div className="cardInventory"> 
                <img className="itemInventory" src={onion}></img>
                <p id="textoncard">cantidad</p>
                    <div className="spaceforbuttoncard">
                        <button className="buttonIncreaseDecrease" onClick={Decrease}>-</button>{number}<button className="buttonIncreaseDecrease" onClick={Increase}>+</button>
                    </div>
                <p id="textoncard">medida</p>
                <div className="spaceforkg"></div>

            </div>
        </div>
    )
};

export default Inventory;



