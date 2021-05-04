import React, {useState} from 'react';
import logoBurguerQueen from '../assets/logoBurguerQueen.png'
import {useHistory} from 'react-router-dom'



const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const LoginUser = (e) =>{
        e.preventDefault();
        console.log(email, password)
        history.push('/menus')
        
    }



    return (
        <div>
            <div id="logoheader">
                <img src={logoBurguerQueen}></img>
            </div>
            <p id="textPage">Iniciar Sesión</p>

            <form onSubmit={LoginUser} id="formLogin">
                <div className="inputsLogin">
                    <input className="email" placeholder="email" type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                    <br></br>
                    <input className="password" placeholder="contraseña" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>     
                    <input className="buttonLogin" type="submit" value="iniciar sesión"></input>
                </div>
            </form>
        </div>
    )
};

export default Login;