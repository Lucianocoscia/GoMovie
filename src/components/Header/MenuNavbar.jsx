import React from 'react'
import './MenuNavbar.css'
import { Link } from 'react-router-dom'
// import Buscador from '../Buscador/Buscador'


const MenuNavbar = () => {

    function show(){
        document.querySelector('.hamburger').classList.toggle('open')
        document.querySelector('.navigation').classList.toggle('active')
    }

    function refreshPage() {
        window.location.reload();
      }
  return (
    <>
    <button className="hamburger" onClick={show}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
    </button>

    <div className="navigation">
        <nav>
            <ul >
                <li onClick={show && refreshPage}  className='nav-item'><Link to='/'>Home</Link></li>
                <li onClick={show && refreshPage } className='nav-item'><Link to='/listado'> Listado </Link></li>
                {/* <li onClick={show } className='nav-item'><a href='/listado'> Listado </a></li> */}
                <li onClick={show } className='nav-item'><Link to='/favoritos'>Favoritos</Link></li>
                <li onClick={show} className='nav-item'><Link to='/contacto'>Contacto</Link></li>

            </ul>
        </nav>

    </div>
    </>

  )
}

export default MenuNavbar