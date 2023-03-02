import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';


import './Register.css'


const Register = () => {

  const navigate = useNavigate(); // esto es para redirigir y cuidar la ruta

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.parentElement);
    const name = e.target.parentElement.name.value;
    const email = e.target.parentElement.email.value;
    const password = e.target.parentElement.password.value;
    // console.log(password);

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    // console.log('aca muestro lo q trae el session',sessionStorage.email);
    sessionStorage.setItem("password", password);
    // console.log('aca muestro lo q trae el session',sessionStorage.password); 


      const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //verifica si es valido el email

    if (email === "" || password === "") {
      toast.error('Los campos no pueden estar vacios', {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }})
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      toast.error('Debes escribir una direccion de correo electronico valida!', {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }})

    }
    navigate('/login')

  }
  let token=  sessionStorage.getItem("token");
  
  return (
    <>
    <Toaster position="top-center"/>
      {token && <Navigate to='/home' />}

        <div className='background-signup'>
            <div className='form-container'>
                <div className="login-box">
                    <p>Sign Up</p>
                    <form onSubmit={submitHandler}>
                        <div className="user-box">
                        <input required="" name="name" type="text" placeholder='Name'/>

                        </div>

                        <div className="user-box">
                        <input required="" name="email" type="text" placeholder='Email'/>

                        </div>

                        <div className="user-box">
                        <input required="" name="password" type="password" placeholder='Password'/>

                        </div>

                        <a href='' onClick={submitHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        Submit
                        </a>
                    </form>
                    <p>Do you have an account? <Link to={'/login'} className="a2">Log in!</Link></p>
                </div>
            </div>
        </div>
    </>

  )
}

export default Register