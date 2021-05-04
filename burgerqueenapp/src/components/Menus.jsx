import React from 'react';
import logoBurguerQueen from '../assets/logoBurguerQueen.png'
import {useHistory} from 'react-router-dom'


const Menus = () => {

    const history = useHistory();

    const ButtonToBreakfast = (e) =>{
        e.preventDefault();
        console.log("el boton sirve BREAKFAST")
        history.push('/breakfast')
        
    }

    const ButtonToDinner = (e) =>{
        e.preventDefault();
        console.log("el boton sirve DINNER")
        history.push('/dinner')
        
    }

    const Logout = (e) =>{
        e.preventDefault();
        console.log("el boton sirve logout")
        history.push('/')
        
    }

    return (
        <div>
            <div id="logoheaderMenu">
                <img src={logoBurguerQueen}></img>
            </div>
            <div>     
                <input className="buttonFood" type="submit" value="Menú desayuno" onClick={ButtonToBreakfast}></input>
                <br></br>
                <input className="buttonFood" type="submit" value="Menú comida"onClick={ButtonToDinner}></input>
            </div>
            <div>
                <input className="buttonLogout" type="submit" value="Cerrar Sesión" onClick={Logout}></input>
            </div>

        </div>

    )
};

export default Menus;