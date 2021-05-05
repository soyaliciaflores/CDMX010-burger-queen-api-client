import React, { Component } from 'react';
import logoBurguerQueen from '../assets/logoBurguerQueen.png'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Menus extends Component {
    logOut=()=>{
        cookies.remove('id',{path:"/"});
        cookies.remove('lastname',{path:"/"});
        cookies.remove('name',{path:"/"});
        cookies.remove('username',{path:"/"});
        window.location.href='./';
    }

    render(){
        console.log('id: '+ cookies.get('id'));
        console.log('lastname :' + cookies.get('lastname'));
        console.log('name :' + cookies.get('name'));
        console.log('username :' + cookies.get('username'));

    return (
        <div>
            <div id="logoheaderMenu">
                <img src={logoBurguerQueen}></img>
            </div>
            <div>     
                <input className="buttonFood" type="submit" value="Menú desayuno"></input>
                <br></br>
                <input className="buttonFood" type="submit" value="Menú comida"></input>
            </div>
            <div>
                <button className="buttonLogout" onClick={()=>this.logOut()}>Cerrar Sesión</button>
            </div>

        </div>

    )
    }
};

export default Menus;