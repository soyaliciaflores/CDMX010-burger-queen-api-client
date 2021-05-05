import React, {Component} from 'react';
import logoBurguerQueen from '../assets/logoBurguerQueen.png'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'



    const baseUrl = "http://localhost:3001/users";
    const cookies = new Cookies();
    


 class Login extends Component {
    
    
     state = {
        form:{
            username:'',
            password:''
        }
    }

     handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    loginUser= async ()=>{
        
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})

        .then(response=>{
            return response.data;
        })
        .then(response =>{
            if(response.length>0){
                var respuesta = response[0];
                cookies.set('id', respuesta.id,{path:"/"})
                cookies.set('lastname', respuesta.lastname,{path:"/"})
                cookies.set('name', respuesta.name,{path:"/"})
                cookies.set('username', respuesta.username,{path:"/"})
                alert("Bienvenidx" + " " +respuesta.name + " " + respuesta.lastname);
                window.location.href="./menus";

            }else{
                alert('usuario o contraseña incorrectos');
            }
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
 

    render(){
    return (
        <div>
            <div id="logoheader">
                <img src={logoBurguerQueen}></img>
            </div>
            <p id="textPage">Iniciar Sesión</p>

            <form id="formLogin">
                <div className="inputsLogin">
                    <input className="email" name="username" placeholder="username" type="text" onChange={this.handleChange} ></input>
                    <br></br>
                    <input className="password" name="password" placeholder="contraseña" type="password" onChange={this.handleChange}></input>
                </div>
                <div>     
                    <button className="buttonLogin" onClick={()=>this.loginUser()}>iniciar sesión</button>
                </div>
            </form>
        </div>
    )
};
 }

export default Login;