import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import '../Registro/Registro.css'


const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.parentElement.email.value;
    const password = e.target.parentElement.password.value;

    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los campos no pueden estar vacios',
      })
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes escribir una direccion de correo electronico valida!',
      })

      return;
    }
    let emailRegiser = sessionStorage.getItem('email');
    let passwordRegister = sessionStorage.getItem('password');

    if (email !== emailRegiser  || password !== passwordRegister) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales invalidas',
      })

      return;
    }
    // if (email !== "challenge@alkemy.org" || password !== "react") {
    //   swAlert("Oops", "Credenciales invalidas", "error");

    //   return;
    // }

    console.log("Ok estamos listos para enviar la informacion ");

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      // .post("http://localhost:3000", { email, password })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text: 'Perfecto, has ingresado correctamente!',
        })
        // console.log(res.data);
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/home");
      });
  };
  let token=  sessionStorage.getItem("token");

  return (

    <>

      {token && <Navigate to='/home' />}
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
                <a hnref='' onClick={submitHandler} >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
            </form>
            <p>Don't have an account? <Link to={'/registro'} className="a2">Sign up!</Link></p>
          </div>
        </div>
      </div>

    </>

  );
};

export default Login;
