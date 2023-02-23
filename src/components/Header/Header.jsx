import React from 'react'
import Buscador from '../Buscador/Buscador'
import MenuNavbar from './MenuNavbar'
import './Header.css'
import Swal from 'sweetalert2'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
const Header = () => {
//Funcion q hace q cambie el navbar
  const isScrolling = () => {
    const headerEl = document.querySelector('header')
    let windowPosition = window.scrollY > 150
    headerEl.classList.toggle('active', windowPosition)
  }
  window.addEventListener('scroll', isScrolling);

  const user = () =>{
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');


    Swal.fire({
      title: 'USER',
      text: `Name: ${name}
      Email: ${email}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Stay logged in',
      confirmButtonText: 'Log Out'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        Swal.fire(
          'Log out success!',
          'you have logged out successfully',
          'success'
        )
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } 
    })
  };

  function ObtenerIniciales(){
      const name = sessionStorage.getItem('name');

      let palabras = name;
      let array = palabras.split(" ");
      let total = array.length;
      let resultado = "";

      for (var i = 0; i < total; resultado += array[i][0], i++);
      console.log(resultado);
      return resultado;
  };

  return (
    <header>  
      <MenuNavbar/>
      <Buscador className="m-3" />
      <Avatar className="m-3 user-icon"  onClick={user} sx={{ bgcolor: 'AppWorkspace', textTransform:'capitalize' }}>{ObtenerIniciales()}</Avatar> 
    
    </header>
  )
}

export default Header