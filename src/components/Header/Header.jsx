import React from 'react'
import Buscador from '../Buscador/Buscador'
import MenuNavbar from './MenuNavbar'
import './Header.css'
import Swal from 'sweetalert2'

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

  return (
    <header>  
      <MenuNavbar/>
      <Buscador />
      <svg onClick={user} className='user-icon' xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg>
    
    </header>
  )
}

export default Header