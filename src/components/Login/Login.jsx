import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { /* Navigate, */ useNavigate } from "react-router-dom";
import '../Register/Register.css'

import toast, {Toaster} from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.parentElement.email.value;
    const password = e.target.parentElement.password.value;

    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || password === "") {
      toast.error("Los campos no pueden estar vacios" , {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }});
    }

    if (email !== "" && !regexEmail.test(email)) {
      toast.error("Debes escribir una direccion de correo electronico valida!" , {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }}, {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }});

      return;
    }
    let emailRegiser = sessionStorage.getItem('email');
    let passwordRegister = sessionStorage.getItem('password');

    if (email !== emailRegiser  || password !== passwordRegister) {
      toast.error("Credenciales invalidas" , {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }});

      return;
    }
    // if (email !== "challenge@alkemy.org" || password !== "react") {
    //   swAlert("Oops", "Credenciales invalidas", "error");

    //   return;
    // }

    console.log("Ok estamos listos para enviar la informacion ");

    // axios
    //   .post("http://challenge-react.alkemy.org", { email, password })
    //   // .post("http://localhost:3000", { email, password })
    //   .then((res) => {
    //     toast.success('Perfecto, has ingresado correctamente!', {style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //     }})
    //     // console.log(res.data);
    //     const tokenRecibido = res.data.token;
    //     sessionStorage.setItem("token", tokenRecibido);
    //     navigate("/home");
    //   });
  };
  // let token=  sessionStorage.getItem("token");

  return (

    <>
      <Toaster  position="top-center"/>
      {/* {token && <Navigate to='/home' />} */}
      <div className='background-signup'>

        <div className='form-container'>

          <div className="login-box">
            <p>Login</p>
            <form >
                <div className="user-box">
                  <input required="" name="email" type="text" placeholder="Email"/>
                </div>
                <div className="user-box">
                  <input required="" name="password" type="password" placeholder="Password"/>
                </div>
                <a  onClick={submitHandler} >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
            </form>
            <p>Don't have an account? <Link to={'/register'} className="a2">Sign up!</Link></p>
          </div>
        </div>
      </div>

    </>

  );
};

export default Login;
