import React from 'react'
import { useState, useEffect } from 'react'
import MenuNavbar from './MenuNavbar'
import './Header.css'

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'; /* useParams */
import Logo from './GoMovie-icon-left-official.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import toast, { Toaster } from 'react-hot-toast';

const Header = () => {

//Funcion q hace q cambie el navbar
  const isScrolling = () => {
    const headerEl = document.querySelector('header')
    let windowPosition = window.scrollY > 150
    headerEl.classList.toggle('active', windowPosition)
  }
  window.addEventListener('scroll', isScrolling);

  function IsLogged(){

      const name = sessionStorage.getItem('name');
      let palabras = name;


      if(palabras === null){
        return;
        
      } else{

        let array = palabras.split(" ")
        let total = array.length;
        let resultado = "";
        for (let i = 0; i < total; resultado += array[i][0], i++);
        console.log(resultado);
        return resultado ;
      }   
      
  }
  const InfoUser = () =>{
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');
    // poner un info
  };

  const Logout = ()=>{
    sessionStorage.clear();
    toast.success('You have logged out successfully')
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header> 
      <Toaster position="top-center"/> 
      <MenuNavbar/>
      <div className='nav-discover'>
        <Link to={'/movies'} className='item-discover' >Movies</Link>
        <Link to={'/tvshow'} className='item-discover'>Tv Show</Link>
      </div>
      <Link to={'/home'}>
        <img className='logo' src={Logo}/>

      </Link>
      
      <div className='flex-container-search-and-user'>
        <IconButton className="search-icon"  aria-label="search" color="inherit">
            <Link to={`/search`}><SearchIcon className='icon-size' /></Link>
        </IconButton>

        <Avatar className="m-3 user-icon"  onClick={handleClick} aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined} sx={{  textTransform:'capitalize' }}>{IsLogged()}</Avatar> 
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-menu',
          }}
        >
          <MenuItem onClick={InfoUser}>My account</MenuItem>
          <MenuItem onClick={Logout}>Logout</MenuItem>
        </Menu>
      </div>

    </header>
  )
}

export default Header